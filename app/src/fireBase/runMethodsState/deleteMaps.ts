import { doc, setDoc } from "firebase/firestore";
import { dataFireBase } from "../index";
import { getDataState } from "./getDataState";
import { IRunMethodsState } from "./types";

export async function deleteMaps(
  series: number,
  UserEmail: string
): Promise<boolean> {
  // Функция для добавления или обновления счетчика последних серий
  try {
    const ArrWork = await getDataState(UserEmail);
    const NewArrWork: IRunMethodsState[] = [];
    if (ArrWork !== null && ArrWork.length > 0) {
      ArrWork.map((work) => {
        if (work.series !== series) {
          NewArrWork.push(work);
        }
      });
    }
    await setDoc(doc(dataFireBase, "runSeriesMaps", UserEmail), {
      NewArrWork,
    });
    return true;
  } catch (error) {
    console.error("setUpdateState: Error setting delete state: ", error);
    throw new Error("setUpdateState: Error setting delete state");
    return false;
  }
}
