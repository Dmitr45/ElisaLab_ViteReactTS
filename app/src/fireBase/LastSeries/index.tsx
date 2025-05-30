import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";
import { useAppContext } from "../../context/ContextProvider";
import { lastSeriesType, toggleLastSeriesType } from "../../context/types";

export function LastSeriesModerator() {
  // создадим контекст истории
  const {
    currentUser,
    lastSeries, // Последняя серия в истории пользователя
    toggleLastSeries,
  }: {
    currentUser: any;
    lastSeries: lastSeriesType;
    toggleLastSeries: toggleLastSeriesType;
  } = useAppContext();

  //===========================================================================================================
  async function getLastSeries(email: string) {
    try {
      const lastes = await getDocs(collection(dataFireBase, "lastSeries"));
      console.log(
        `getLastSeries: Загрузил последние серии: ${lastes.docs.length}`
      );
      const userLastSeries = docSelection(lastes.docs, email);
      //@ts-expect-error &&&
      toggleLastSeries(userLastSeries.counter);
      //@ts-expect-error &&&
      return userLastSeries.counter;
    } catch {
      console.log(
        `getLastSeries: Ошибка при загрузке счетчика последних серий`
      );
      return null;
    }
  }

  useEffect(() => {
    getLastSeries(currentUser.email);
  }, [currentUser]);

  return <span>{lastSeries}</span>;
}

//===========================================================================================================
