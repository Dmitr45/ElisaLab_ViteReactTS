//https://toxigon.com/create-social-media-app-with-firebase-and-react
import { LoaderPD } from "../Loader";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import style from "../styles.module.scss";
import { useMethods } from "../../fireBase/MethodsData/MethodsProvider";
import {
  IMethod,
  TypeToggleMethodSelected,
} from "../../fireBase/MethodsData/types";

import { userIType } from "../../fireBase/UsersProfileData/profile";
import { useCallback, useEffect, useState } from "react";

export function Methods() {
  //@ts-expect-error  ???
  const {
    standardMethods,
  }: {
    standardMethods: IMethod[];
  } = useMethods();

  const {
    userLoggedIn,
    userData,
    themeActive,
    togglePageActive,
    toggleMessage,
    toggleMethodSelected,
    methodSelected,
  }: {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
    toggleMethodSelected: TypeToggleMethodSelected;
    methodSelected: IMethod;
    userData: userIType;
    userLoggedIn: boolean;
  } = useAppContext();

  const [click, setClick] = useState(false);

  useEffect(() => {
    if (methodSelected !== null && click === true) {
      toggleMessage({
        type: "success",
        message: "The method chosen: " + methodSelected.name,
      });
      setClick(false);
      togglePageActive(12);
    }
  }, [click]);

  const RenderTableStandard = useCallback(() => {
    if (standardMethods.length > 0) {
      return (
        <div className={style.container}>
          <div className={style.pageTitle}>Standard methods</div>
          {standardMethods.map((method, index) => (
            <div
              key={index}
              tabIndex={index}
              className={style.methodButton + " " + themeActive.borderWishHover}
              onClick={() => {
                toggleMethodSelected(method);
                setClick(true);
                console.log("Selected method: " + method.name);
              }}
            >
              {method.name + " (" + method.type + ")"}
            </div>
          ))}
          <div className={style.pageTitle}>
            {userLoggedIn ? userData.name : "Users"}'s methods
          </div>
          <div>
            <div>
              There's nothing here yet!
              <br />
              Select a standard method, modify it, and save it as your own.
            </div>
          </div>
        </div>
      );
    } else return <LoaderPD />;
  }, [standardMethods]);

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <RenderTableStandard />
      </div>
    </div>
  );
}
