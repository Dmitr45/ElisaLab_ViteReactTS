import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import { userIType } from "../../fireBase/UsersProfileData/types";
import style from "../styles.module.scss";
import { RenderHistory } from "../../components/RenderHistory";
// import { useEffect } from "react";
import { useHistory } from "../../fireBase/HistoryData/HistoryProvider";
import { IRouteMap } from "../../fireBase/RouteMaps/types";
//====================================================================================
export function History() {
  const {
    // userLoggedIn,
    // userData,
    themeActive,
  }: {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
    userData: userIType;
    userLoggedIn: boolean;
  } = useAppContext();

  //@ts-expect-error &&&
  const { historyArr }: { historyArr: IRouteMap[] } = useHistory();

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.container}>
          <div className={style.pageTitle}>History</div>
          <RenderHistory historyArr={historyArr} />
        </div>
      </div>
    </div>
  );
}
