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
import { RiFolderUserLine } from "react-icons/ri";

import { userIType } from "../../fireBase/UsersProfileData/types";
import { useCallback, useEffect, useState } from "react";

export function Methods() {
  //@ts-expect-error  ???
  const {
    standardMethods,
    userMethods,
  }: {
    standardMethods: IMethod[];
    userMethods: IMethod[];
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
        </div>
      );
    } else return <LoaderPD />;
  }, [standardMethods]);
  //===================================================================================================

  const RenderTableUser = useCallback(() => {
    if (userLoggedIn) {
      if (userMethods) {
        return (
          <div className={style.container}>
            <div className={style.pageTitle}>{userData.name}'s methods</div>
            {userMethods.map((method, index) => (
              <div
                key={index}
                tabIndex={index}
                className={
                  style.methodButton + " " + themeActive.borderWishHover
                }
                onClick={() => {
                  toggleMethodSelected(method);
                  setClick(true);
                  console.log("Selected method: " + method.name);
                }}
              >
                {method.name + " (" + method.type + ")"}
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <>
            <div className={style.pageTitle}>{userData.name}'s methods</div>
            <div>
              There's nothing here yet!
              <br />
            </div>
          </>
        );
      }
    } else {
      return (
        <>
          <div className={style.pageTitle}>Users's methods</div>
          <div>
            There's nothing here yet!
            <br />
            Log in to see your saved methods.
          </div>
          <button
            onClick={() => {
              togglePageActive(1);
            }}
          >
            Log in for download&nbsp;
            <RiFolderUserLine />
          </button>
        </>
      );
    }
  }, [userMethods]);

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <RenderTableStandard />
        <RenderTableUser />
      </div>
    </div>
  );
}
