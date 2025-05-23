import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";
import { IMethod } from "./types";
import { MessageIType } from "../../context/types";

//===========================================================================================================
export async function getStandardMethods() {
  const standardMethods: IMethod[] = [];
  try {
    const methods = await getDocs(collection(dataFireBase, "methods"));
    console.log(
      `getStandardMethods: Загрузил папки методов с сервера, всего папок с документами:  ${methods.docs.length}`
    );
    const standard = docSelection(methods.docs, "standardMethods");
    //@ts-expect-error ?&&
    standardMethods.push(...standard.method);

    return standardMethods;
  } catch {
    console.log(`getStandardMethods: Стандартные методы не найдены`);
    return null;
  }
}

//===========================================================================================================
export async function getUserMethods(email: string) {
  const userMethods: IMethod[] = [];
  try {
    const methods = await getDocs(collection(dataFireBase, "methods"));
    console.log(
      `getUserMethods: Загрузил папки методов с сервера, всего папок с документами:  ${methods.docs.length}`
    );
    const userM = docSelection(methods.docs, email);
    //@ts-expect-error ?&&
    userMethods.push(...userM.maps);
    // console.log(
    //   "Загрузили User's methods, первый метод: " + userMethods[0].name
    // );
    return userMethods;
  } catch {
    console.log(`getUserMethods: User's методы не найдены`);
    return null;
  }
}

//===========================================================================================================

export async function setUserMethod(
  email: string,
  method: IMethod
): Promise<MessageIType> {
  try {
    const allMethods = await getDocs(collection(dataFireBase, "methods"));
    console.log(
      `getStandardMethods: Загрузил папки методов с сервера, всего папок с документами:  ${allMethods.docs.length}`
    );
    const usersMethodDoc = docSelection(allMethods.docs, email);
    //@ts-expect-error &&&&
    if (!usersMethodDoc || !usersMethodDoc.maps) {
      console.log(" Пользовательские методы пока не найдены, создаем с нуля");
      await setDoc(doc(dataFireBase, "methods", email), {
        maps: [method],
      });
    } else {
      console.log(" Пользовательские методы найдены, обновляем их");
      //@ts-expect-error &&&
      const usersMethodsArr: IMethod[] = usersMethodDoc.maps; // Массив существующих методов
      console.log("usersMethodsArr: " + usersMethodsArr);
      const usersMethodNameArr: string[] = usersMethodsArr.map(
        (elem: IMethod) => {
          //Массив названий существующих методов
          return elem.name;
        }
      );
      if (
        usersMethodNameArr.filter((elem: string) => {
          return elem === method.name;
        }).length === 0
      ) {
        usersMethodsArr.push(method);
        await setDoc(doc(dataFireBase, "methods", email), {
          maps: usersMethodsArr,
        });
        console.log(`setUserMethod :  save method "${method.name}"`);
      } else {
        console.error(
          `setUserMethod : There is already such a method "${method.name}"`
        );
        throw new Error(
          `setUserMethod : There is already such a method "${method.name}"`
        );
      }
    }
    return {
      type: "success",
      message: `setUserMethod :  save method "${method.name}"`,
    };
  } catch (error) {
    console.log(`setUserMethod Error:  "${method.name}" --- ${error}`);
    return { type: "error", message: String(error) };
  }
}
