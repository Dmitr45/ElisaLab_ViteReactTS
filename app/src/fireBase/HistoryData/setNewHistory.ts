import { doc, updateDoc } from "firebase/firestore";
import { dataFireBase } from "../index";
import { IRouteMap } from "./types.ts";

export async function setNewHistory(
  series: number,
  RoutMap: IRouteMap,
  UserEmail: string
): Promise<boolean> {
  // Функция для добавления или обновления счетчика последних серий
  try {
    await updateDoc(doc(dataFireBase, "historySeriesMaps", UserEmail), {
      [String(series)]: [
        {
          idMethod: RoutMap.idMethod,
          methodName: RoutMap.methodName,
          type: RoutMap.type,
          isClosed: RoutMap.isClosed,
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
    console.error("Error setting new history: ", error);
    throw new Error("Error setting new history");
    return false;
  }
}
