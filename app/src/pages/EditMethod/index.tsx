import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import style from "../styles.module.scss";
import { useEffect, useState } from "react";

export function EditMethod() {
  ////@ts-expect-error  ???
  //const { standardMethods }: { standardMethods: IMethod[] } = useMethods();
  ////@ts-expect-error &&&
  // const {
  //   userLoggedIn,
  //   userData,
  // }: { userData: userIType; userLoggedIn: boolean } = useAuth();
  const {
    themeActive,
    togglePageActive,
    toggleMessage,
  }: {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
  } = useAppContext();

  const [clicked, setClicked] = useState<number>(-1);

  useEffect(() => {
    setClicked(-1);
    if (clicked !== -1) {
      toggleMessage({
        type: "success",
        message: "The method chosen: ",
      });
      togglePageActive(5);
    }
  }, [clicked]);

  const RenderFormsMethod = () => {
    return <div>Метод скоро....</div>;
  };

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.container}>
          <div className={style.pageTitle}>Method preparation</div>
          <RenderFormsMethod />
        </div>
        <button>Start method</button>
      </div>
    </div>
  );
}
