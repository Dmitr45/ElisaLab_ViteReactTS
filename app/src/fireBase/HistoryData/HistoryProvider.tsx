import React, { useState, useContext, useEffect } from "react";
import { IRouteMap } from "./types.ts"; // Импортируем интерфейс IRouteMap
import { useAppContext } from "../../context/ContextProvider";

import { userIType } from "../UsersProfileData/types";
import { togglePageActiveType, lastSeriesType } from "../../context/types";
import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";

//@ts-expect-error ???
const HistoryContext = React.createContext();

export function useHistory() {
  // создадим хук работы с методами
  return useContext(HistoryContext);
}

//@ts-expect-error ??? ======================================================================================
export function HistoryProvider({ children }) {
  const {
    currentUser,
    userLoggedIn,
    lastSeries,
  }: //togglePageActive,
  {
    userLoggedIn: boolean;
    userData: userIType;
    currentUser: any;
    togglePageActive: togglePageActiveType;
    lastSeries: lastSeriesType;
  } = useAppContext();

  // создадим контекст истории
  const [historyArr, setHistoryArr] = useState<IRouteMap[]>([]);

  //===========================================================================================================
  async function getHistory(email: string) {
    try {
      const history = await getDocs(
        collection(dataFireBase, "historySeriesMaps")
      );
      console.log(
        `getHistory: Загрузил папки с законченными маршрутками:  ${history.docs.length}`
      );
      const usersHistory = docSelection(history.docs, email);
      const historyArr: IRouteMap[] = [];
      for (const key of Object.keys(usersHistory)) {
        //@ts-expect-error &&&
        historyArr.push(usersHistory[key][0]) as IRouteMap;
      }

      setHistoryArr(historyArr);
      return historyArr;
    } catch {
      console.log(`getHistory: Истории работ нет или вы не авторизованы`);
      return null;
    }
  }

  useEffect(() => {
    if (userLoggedIn) {
      getHistory(currentUser.email);
    } else {
      console.log("Вы не авторизованы");
    }
  }, [userLoggedIn, currentUser, lastSeries]);

  const value = {
    historyArr,
  };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
}
