//https://toxigon.com/create-social-media-app-with-firebase-and-react

import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType, toggleMessageType } from "../../context/types";
import style from "../styles.module.scss";
//import { useAuth } from "../../fireBase/FireBaseProvider";
//import { userIType } from "../../fireBase/UsersProfileData/profile";

export function Methods() {
  ////@ts-expect-error  ???   const { currentUser, userData }: { userData: userIType; currentUser: any } =     useAuth();
  const {
    themeActive,
  }: //toggleMessage,
  {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
  } = useAppContext();

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.container}>
          <div className={style.pageTitle}>Methods</div>
          <div>контент</div>
        </div>
      </div>
    </div>
  );
}
