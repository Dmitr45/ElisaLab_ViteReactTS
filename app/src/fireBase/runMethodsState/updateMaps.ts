import { doc, updateDoc } from "firebase/firestore";
import { dataFireBase } from "../index";
import { IRunMethodsState } from "./types.ts";

export async function setUpdateState(
  series: number,
  RoutMap: IRunMethodsState,
  UserEmail: string
): Promise<boolean> {
  // Функция для добавления или обновления счетчика последних серий
  try {
    await updateDoc(doc(dataFireBase, "runSeriesMaps", UserEmail), {
      [String(series)]: [
        {
          series: RoutMap.series,
          methodName: RoutMap.methodName,
          type: RoutMap.type,
          stages: RoutMap.stages,
          nameStages: RoutMap.nameStages,
          times: RoutMap.times,
          start: RoutMap.start,
          temperatures: RoutMap.temperatures,
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
