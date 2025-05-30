import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";
import { IRunMethodsState } from "./types";

export async function getDataState(email: string) {
  try {
    const users = await getDocs(collection(dataFireBase, "runSeriesMaps"));
    console.log("getDataState загрузил данные с сервера и ищет ваши профайлы");

    const RunData = docSelection(
      users.docs.map((doc) => doc),
      email
    );

    const workArr: IRunMethodsState[] = [];
    for (const key of Object.keys(RunData)) {
      //@ts-expect-error &&&
      workArr.push(RunData[key][0]) as IRouteMap;
    }

    //console.log("RunData: " + workArr[0].numberStage);
    return workArr;
  } catch {
    console.log(`getDataState : Работы пользователя ${email} не найдены`);
    return null;
  }
}
