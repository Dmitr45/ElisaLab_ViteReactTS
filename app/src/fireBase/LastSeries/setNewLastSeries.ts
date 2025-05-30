import { doc, setDoc } from "firebase/firestore";
import { dataFireBase } from "../index";

export async function setNewLastSeries(
  newLastSeries: number,
  UserEmail: string
): Promise<boolean> {
  // Функция для добавления или обновления счетчика последних серий
  try {
    await setDoc(doc(dataFireBase, "lastSeries", UserEmail), {
      counter: newLastSeries,
    });
    return true;
  } catch (error) {
    console.error("Error setting new last series: ", error);
    throw new Error("Не удалось обновить счетчик последних серий");
    return false;
  }
}
