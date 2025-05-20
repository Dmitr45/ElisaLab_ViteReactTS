import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";
import { IRouteMap } from "../RouteMaps/types";

//===========================================================================================================
export async function getHistory(email: string) {
  try {
    const history = await getDocs(
      collection(dataFireBase, "historySeriesMaps")
    );
    console.log(
      `getHistory: Загрузил папки с законченными маршрутками:  ${history.docs.length}`
    );
    const usersHistory = docSelection(history.docs, email);
    //@ts-expect-error &&&
    const historyArr: IRouteMap[] = usersHistory.maps.forEach((doc) =>
      historyArr.push(doc)
    );
    console.log("getHistory:" + historyArr);
    return historyArr;
  } catch {
    console.log(`getHistory: Истории работ нет или вы не авторизованы`);
    return null;
  }
}
//===========================================================================================================
