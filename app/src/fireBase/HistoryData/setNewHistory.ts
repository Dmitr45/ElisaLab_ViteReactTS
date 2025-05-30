import { doc, updateDoc } from "firebase/firestore";
import { dataFireBase } from "../index";
import { IRouteMap } from "./types.ts";

export async function setNewHistory(
  series: number,
  history: IRouteMap,
  UserEmail: string
): Promise<boolean> {
  // Функция для добавления или обновления счетчика последних серий
  try {
    await updateDoc(doc(dataFireBase, "historySeriesMaps", UserEmail), {
      [String(series)]: [
        {
          idMethod: history.idMethod,
          methodName: history.methodName,
          type: history.type,
          isClosed: history.isClosed,
          stage: history.stage,
          //   stage: history.stage.map((stage) => ({
          //     id: stage.id,
          //     nameStage: stage.nameStage,
          //     time: stage.time,
          //     temperature: stage.temperature,
          //     isEnabled: stage.isEnabled,
          //   })),
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
