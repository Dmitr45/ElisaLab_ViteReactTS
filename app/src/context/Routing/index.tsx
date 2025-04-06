import { useAppContext } from "../../context/ContextProvider";
import { pagesType, themeActiveType } from "../../context/types";
import { Authorization } from "../../pages/Loginer";
import { Registration } from "../../pages/Registration";
import { Start } from "../../pages/Start/index";
import { Navigation } from "../../pages/Navigation";
import { Profile } from "../../pages/Profile";
import { SimpleTimerPage } from "../../pages/SimpleTimer";
import { FormSimpleTimer } from "../../pages/SimpleTimer/Form";
import { Alarm } from "../../pages/AlarmFinish";
import { TimeTrueLocal } from "../../logics/deltaTimeLogic";
import { Test } from "../../pages/Test";
import { useAuth } from "../../fireBase/AuthProvider";

export function Routing() {
  const {
    themeActive,
    pageActive,
  }: { themeActive: themeActiveType; pageActive: number } = useAppContext();
  //@ts-expect-error ???
  const { userLoggedIn } = useAuth();
  //console.log("userLoggedIn: " + userLoggedIn);

  const pagesArr: pagesType = [
    Start, // 0
    Authorization, // 1
    Registration, // 2
    Navigation, // 3
    userLoggedIn ? Profile : Authorization, // 4
    TimeTrueLocal("simpleTimerStart") ? SimpleTimerPage : FormSimpleTimer, // 5
    FormSimpleTimer, // 6
    SimpleTimerPage, // 7
    Alarm, // 8
    Test, // 9
  ];

  return <div className={themeActive.section}>{pagesArr[pageActive]()}</div>;
}
