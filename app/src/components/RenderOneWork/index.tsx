import { useEffect, useState } from "react";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import useInterval from "use-interval";
import { Time } from "../../logics/timeNow";
import styles from "./styles.module.scss";
import { GrChapterNext } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppContext } from "../../context/ContextProvider";
import { setUpdateState } from "../../fireBase/runMethodsState/updateMaps";
import useSound from "use-sound";
import finishAlert from "/sound/Finish.mp3";

import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
  toggleRebootWorkPageType,
  rebootWorkPageType,
} from "../../context/types";

export function RenderOneWork({ ObjWork }: { ObjWork: IRunMethodsState }) {
  const {
    themeActive,
    currentUser,
    toggleMessage,
    toggleRebootWorkPage,
  }: //togglePageActive,

  {
    themeActive: themeActiveType;
    toggleMessage: toggleMessageType;
    togglePageActive: togglePageActiveType;
    toggleRebootWorkPage: toggleRebootWorkPageType;
    currentUser: any;
    rebootWorkPage: rebootWorkPageType;
  } = useAppContext();

  const [play, { stop }] = useSound(finishAlert);

  const [timer, setTimer] = useState(<></>);
  const [deltaMin, setDeltaMin] = useState<number>();
  const [timeStart, setTimeStart] = useState<number>(
    Math.floor(Date.now() / 1000)
  );

  const [stageActive] = useState<number>(() => {
    return ObjWork.stages.indexOf(true);
  });

  const [borderWork, setBorderWork] = useState(themeActive.borderNormal); // borderNormal vs borderAlert

  useEffect(() => {
    console.log("ObjWork.start =" + new Date(ObjWork.start[stageActive]));
    setTimeStart(Math.floor(ObjWork.start[stageActive]));
    setDeltaMin(ObjWork.times[stageActive]); // Convert minutes to min
  }, []);

  useInterval(() => {
    const ObjTimes = Time(ObjWork.start[stageActive], deltaMin);
    if (
      ObjTimes.hourRevers === 0 &&
      ObjTimes.minRevers === 0 &&
      ObjTimes.secRevers === 5
    ) {
      play();
    }

    if (
      ObjTimes.hourRevers === 0 &&
      ObjTimes.minRevers === 0 &&
      ObjTimes.secRevers === 0
    ) {
      if (borderWork === themeActive.borderNormal) {
        setBorderWork(themeActive.borderAlert);
        console.log("FINISH !!!!");
      }
    } else {
      if (borderWork === themeActive.borderAlert) {
        setBorderWork(themeActive.borderNormal);
      }
      setTimer(
        <div>
          {Time(timeStart, deltaMin).hourRevers} :{" "}
          {Time(timeStart, deltaMin).minRevers} :{" "}
          {Time(timeStart, deltaMin).secRevers}
        </div>
      );
    }
  }, 1000);

  async function NextStage() {
    stop();
    try {
      console.log(
        "Click: Следующий этап в работе по маршрутной карте серии: " +
          ObjWork.series
      );
      const newStages: boolean[] = ObjWork.stages.map((stage, index) =>
        index === stageActive ? false : stage
      );

      await setUpdateState(
        ObjWork.series,
        {
          series: ObjWork.series,
          methodName: ObjWork.methodName,
          type: ObjWork.type,
          stages: newStages,
          nameStages: ObjWork.nameStages,
          temperatures: ObjWork.temperatures,
          times: ObjWork.times,
          shaking: ObjWork.shaking,
          start: [Date.now(), Date.now(), Date.now(), Date.now(), Date.now()],
        },
        currentUser.email
      );
      toggleRebootWorkPage(true);
    } catch (error) {
      toggleMessage({
        type: "error",
        message: "Error delete maps: " + error,
      });
    }
  }

  async function Delete() {
    stop();
    try {
      console.log(
        "Click: Остановить работу по маршрутной карте серии: " + ObjWork.series
      );
      await setUpdateState(
        ObjWork.series,
        {
          series: 0,
          methodName: "",
          type: "",
          stages: [],
          nameStages: [],
          temperatures: [],
          times: [],
          shaking: [],
          start: [],
        },
        currentUser.email
      );
      toggleMessage({
        type: "success",
        message: "Work series: " + ObjWork.series + " was stopped",
      });
      toggleRebootWorkPage(true);
    } catch (error) {
      toggleMessage({
        type: "error",
        message: "Error delete maps: " + error,
      });
    }
  }

  return (
    <div>
      {ObjWork.series !== 0 ? (
        <div className={styles.oneWork + " " + borderWork}>
          <div className={styles.oneWorkInfo}>
            <h2>{ObjWork.methodName}</h2>
            Current stage:{stageActive + 1} {ObjWork.nameStages[stageActive]}
            <p>Type work: {ObjWork.type}</p>
            <p>
              Temperature: {ObjWork.temperatures[stageActive]}°C
              <br />
              Time: {ObjWork.times[stageActive]} min <br />
              Shaking: {ObjWork.shaking[stageActive]} RPM
              <br />
            </p>
          </div>
          <div className={styles.oneWorkTimer}>{timer}</div>
          <div className={styles.oneWorkManagement}>
            <div
              className={
                styles.oneWorkButton + " " + themeActive.borderWishHover
              }
              onClick={() => {
                NextStage();
              }}
            >
              <GrChapterNext style={{ fontSize: 32 }} />
              <br />
              Next stage
            </div>
            <div
              className={
                styles.oneWorkButton + " " + themeActive.borderWishHover
              }
              onClick={() => {
                Delete();
              }}
            >
              <RiDeleteBin5Line style={{ fontSize: 32 }} /> <br />
              Delete work
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
