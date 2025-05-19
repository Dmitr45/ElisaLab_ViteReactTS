import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import style from "../styles.module.scss";
import {
  IMethod,
  TypeToggleMethodSelected,
} from "../../fireBase/MethodsData/types";
import { RenderFormsMethod } from "../../components/RenderFormsMethod";
import { useEffect } from "react";
//====================================================================================
export function History() {
  const {
    methodSelected,
  }: //toggleMethodSelected,
  {
    methodSelected: IMethod;
    toggleMethodSelected: TypeToggleMethodSelected;
  } = useAppContext();

  ////@ts-expect-error &&&
  // const {
  //   userLoggedIn,
  //   userData,
  // }: { userData: userIType; userLoggedIn: boolean } = useAuth();
  const {
    themeActive,
  }: //togglePageActive,
  // toggleMessage,
  {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
  } = useAppContext();

  useEffect(() => {
    console.log("new: " + methodSelected);
  }, [methodSelected]);

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.container}>
          <div className={style.pageTitle}>History</div>
          <RenderFormsMethod method={methodSelected} />
        </div>
      </div>
    </div>
  );
}
