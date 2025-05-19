import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";
import { IRouteMap } from "./types";

//===========================================================================================================
export async function getHistoryMaps(email: string) {
  const userHistory: IRouteMap[] = [];
  try {
    const historyMaps = await getDocs(
      collection(dataFireBase, "historySeriesMaps")
    );
    console.log(
      `getHistoryMaps: Загрузил маршрутные карты истории с сервера, всего документов:  ${historyMaps.docs.length}`
    );
    const arrHistory = docSelection(historyMaps.docs, email);
    //@ts-expect-error ?&&
    userHistory.push(...arrHistory.historyMaps);

    return userHistory;
  } catch {
    console.log(`getHistoryMaps: Законченных маршрутных карт нет`);
    return null;
  }
}
//===========================================================================================================
