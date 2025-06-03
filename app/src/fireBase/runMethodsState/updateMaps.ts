import { doc, updateDoc, Timestamp } from "firebase/firestore";
import { dataFireBase } from "../index";
import { IRunMethodsState } from "./types.ts";

export async function setUpdateState(
  series: number,
  state: IRunMethodsState,
  UserEmail: string,
  times: number[]
): Promise<boolean> {
  // Функция для добавления или обновления счетчика последних серий
  try {
    await updateDoc(doc(dataFireBase, "runSeriesMaps", UserEmail), {
      [String(series)]: [
        {
          numberStage: state.numberStage,
          start: new Timestamp(state.start / 1000, 0),
          series: series,
          times: times,
        },
      ],
    });
    return true;
  } catch (error) {
    console.error("setUpdateState: Error setting new state: ", error);
    throw new Error("setUpdateState: Error setting new state");
    return false;
  }
}
