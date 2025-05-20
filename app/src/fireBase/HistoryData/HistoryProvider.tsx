import React, { useState, useContext, useEffect } from "react";
import { getHistory } from "./history";
import { IRouteMap } from "../RouteMaps/types";
import { useAppContext } from "../../context/ContextProvider";
import { userIType } from "../UsersProfileData/profile";
import { togglePageActiveType } from "../../context/types";
//@ts-expect-error ???
const HistoryContext = React.createContext();

export function useHistory() {
  // создадим хук работы с методами
  return useContext(HistoryContext);
}

//@ts-expect-error ???
export function HistoryProvider({ children }) {
  const {
    userData,
    currentUser,
    userLoggedIn,
  }: //togglePageActive,
  {
    userLoggedIn: boolean;
    userData: userIType;
    currentUser: any;
    togglePageActive: togglePageActiveType;
  } = useAppContext();

  // создадим контекст истории
  const [historyArr, setHistoryArr] = useState<IRouteMap[]>([]);

  async function HistoryLoad(email: string): Promise<IRouteMap[]> {
    try {
      //console.log(`Вызвали функцию getHistory с email: ${email}`);

      console.log("getHistory: " + getHistory(email));
      setHistoryArr([
        {
          series: 1225,
          idMethod: "dgdsgdg",
          methodName: "gddfgdg",
          type: "gdgsdgd",
          stage: [],
        },
        {
          series: 534543,
          idMethod: "dgdsgdg",
          methodName: "gddfgdg",
          type: "gdgsdgd",
          stage: [],
        },
        {
          series: 5345,
          idMethod: "dgdsgdg",
          methodName: "gddfgdg",
          type: "gdgsdgd",
          stage: [],
        },
      ]);
      return [];
    } catch {
      console.error("Error");
      return [];
    }
  }

  useEffect(() => {
    if (userLoggedIn) {
      HistoryLoad(currentUser.email);
    } else {
      console.log("Вы не авторизованы");
    }
  }, [userLoggedIn, currentUser]);

  const value = {
    historyArr,
  };
  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
}
