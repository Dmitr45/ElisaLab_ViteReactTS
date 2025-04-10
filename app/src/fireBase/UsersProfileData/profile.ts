//https://www.youtube.com/watch?v=0fHNGfYg2gs
//https://www.youtube.com/watch?v=YpuyxBfYRT8&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS&index=2
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
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
    console.log(`getUser : Пользователь ${email} не найден`);
    return null;
  }
}

export async function setUserAccount(email: string, accountObj: userIType) {
  const docRef = doc(dataFireBase, "users", email);
  try {
    await setDoc(docRef, accountObj);
    console.log("setUser : Аккаунт обновлен");
  } catch {
    console.log("getUser : Пользователь не найден");
  }
}
