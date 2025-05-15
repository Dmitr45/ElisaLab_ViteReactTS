import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";

export interface IMethod {
  id: string;
  name: string;
  stage?: object[];
}
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
