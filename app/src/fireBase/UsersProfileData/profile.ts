//https://www.youtube.com/watch?v=0fHNGfYg2gs
import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";

export interface userIType {
  email?: string;
  name?: string;
  github?: string;
  phone?: string;
  telegram?: string;
  groups?: string[];
  note?: string;
}

export async function getUser(email: string) {
  let userData: userIType | null = null;

  try {
    const users = await getDocs(collection(dataFireBase, "users"));
    console.log("getUser : Загрузили профиль пользователя " + email);
    users.docs.filter((file): userIType | null =>
      file.id === email
        ? (userData = {
            name: String(file.data().name),
            email: String(file.data().email),
            github: String(file.data().github),
            phone: String(file.data().phone),
            telegram: String(file.data().telegram),
            groups: file.data().groups,
            note: String(file.data().note),
          })
        : (userData = null)
    );
    console.log(userData);
    return userData;
  } catch {
    console.log("getUser : Пользователь не найден");
    return null;
  }
}
