import { collection, getDocs } from "firebase/firestore";
import { dataFireBase } from "../index";
import { docSelection } from "../functions/funcDocSelection";

export interface IMetod {
  id: string;
  name: string;
  stage: object[];
}
//===========================================================================================================
export async function getStandardMethods() {
  const standardMethods: IMetod[] = [];
  try {
    const methods = await getDocs(collection(dataFireBase, "methods"));
    console.log(
      `getMethods загрузил папки методов с сервера, Всего папок с документами:  ${methods.docs.length}`
    );
    const standard = docSelection(
      methods.docs.map((doc) => doc),
      "standardMethods"
    ) as IMetod[];
    standardMethods.push(...standard);

    return standardMethods;
  } catch {
    console.log(`getMethods : Стандартные методы не найдены`);
    return null;
  }
}
//===========================================================================================================
