//https://www.youtube.com/watch?v=0fHNGfYg2gs
//https://www.youtube.com/watch?v=YpuyxBfYRT8&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS&index=2
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../funcDocSelection";

export interface userIType {
  email?: string;
  name?: string;
  link?: string;
  phone?: string;
  telegram?: string;
  groups?: string[];
  note?: string;
}

export async function getUser(email: string) {
  let userData: userIType | null = null;
  let userDoc: userIType | null = null;
  try {
    const users = await getDocs(collection(dataFireBase, "users"));
    console.log("getUser загрузил данные с сервера и ищет ваш профиль");

    userDoc = docSelection(
      users.docs.map((doc) => doc),
      email
    ) as userIType;

    userData = {
      name: String(userDoc.name),
      email: String(userDoc.email),
      link: String(userDoc.link),
      phone: String(userDoc.phone),
      telegram: String(userDoc.telegram),
      groups: userDoc.groups,
      note: String(userDoc.note),
    };

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
