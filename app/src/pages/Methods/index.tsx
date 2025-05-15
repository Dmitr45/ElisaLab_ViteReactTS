//https://toxigon.com/create-social-media-app-with-firebase-and-react

import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import style from "../styles.module.scss";
import { useMethods } from "../../fireBase/MethodsData/MethodsProvider";
import { IMethod } from "../../fireBase/MethodsData/methods";
import { useAuth } from "../../fireBase/Auth/AuthProvider";
import { userIType } from "../../fireBase/UsersProfileData/profile";
import { useCallback, useEffect, useState } from "react";

export function Methods() {
  //@ts-expect-error  ???
  const { standardMethods }: { standardMethods: IMethod[] } = useMethods();
  //@ts-expect-error &&&
  const {
    userLoggedIn,
    userData,
  }: { userData: userIType; userLoggedIn: boolean } = useAuth();
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
    if (clicked !== -1) {
      toggleMessage({
        type: "success",
        message: "The method chosen: " + standardMethods[clicked].name,
      });
      togglePageActive(12);
    }
  }, [clicked]);

  const RenderTableStandard = useCallback(() => {
    return standardMethods.map((method, index) => (
      <div
        key={index}
        tabIndex={index}
        className={style.methodButton + " " + themeActive.methodButton}
        onClick={() => {
          setClicked(index);
        }}
      >
        {method.name}
      </div>
    ));
  }, [standardMethods]);

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.container}>
          <div className={style.pageTitle}>Standard methods</div>
          <RenderTableStandard />
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
      </div>
    </div>
  );
}
