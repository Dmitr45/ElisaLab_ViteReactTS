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
import { Test } from "../../pages/Test";
import { About } from "../../pages/AboutApp";
import { Methods } from "../../pages/Methods";
import { EditMethod } from "../../pages/EditMethod";
import { History } from "../../pages/History";
import { LoaderPD } from "../../pages/Loader";
import { WorkPage } from "../../pages/Work";
import { AboutELISA } from "../../pages/AboutELISA";
import { AboutInstall } from "../../pages/AboutInstall";
import { Manual } from "../../pages/Manual";

export function Routing() {
  const { userLoggedIn } = useAppContext();
  const {
    themeActive,
    pageActive,
  }: { themeActive: themeActiveType; pageActive: number } = useAppContext();

  const pagesArr: pagesType = [
    <Start />, // 0
    <Authorization />, // 1
    <Registration />, // 2
    <Navigation />, // 3
    userLoggedIn ? <Profile /> : <Authorization />, // 4
    <SimpleTimerPage />, // 5
    <FormSimpleTimer />, // 6
    <SimpleTimerPage />, // 7
    <Alarm />, // 8
    <Test />, // 9
    <About />, //10
    <Methods />, //11
    <EditMethod />, //12
    userLoggedIn ? <History /> : <Authorization />, //13
    <LoaderPD />, //14
    <WorkPage />, //15
    <AboutELISA />, //16
    <AboutInstall />, //17
    <Manual />, //18
  ];

  return <div className={themeActive.section}>{pagesArr[pageActive]}</div>;
}
