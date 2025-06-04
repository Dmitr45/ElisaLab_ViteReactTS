import { useEffect, useState } from "react";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import useInterval from "use-interval";
import { Time } from "../../logics/timeNow";
import styles from "./styles.module.scss";
import { GrChapterNext } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppContext } from "../../context/ContextProvider";
import { deleteMaps } from "../../fireBase/runMethodsState/deleteMaps";

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

  const [timer, setTimer] = useState(<></>);
  const [deltaMin, setDeltaMin] = useState<number>();

  const [timeStart, setTimeStart] = useState<number>(
    Math.floor(Date.now() / 1000)
  );

  const [stageActive] = useState<number>(() => {
    return ObjWork.stages.indexOf(true);
  });

  useEffect(() => {
    console.log("ObjWork.start =" + new Date(ObjWork.start[stageActive]));
    setTimeStart(Math.floor(ObjWork.start[stageActive]));
    setDeltaMin(ObjWork.times[stageActive]); // Convert minutes to min
  }, []);

  useInterval(() => {
    if (
      Time(ObjWork.start[stageActive], deltaMin).hourRevers === 0 &&
      Time(ObjWork.start[stageActive], deltaMin).minRevers === 0 &&
      Time(timeStart, deltaMin).secRevers === 0
    ) {
      console.log("FINISH !!!!");
    } else {
      setTimer(
        <div>
          {Time(timeStart, deltaMin).hourRevers} :{" "}
          {Time(timeStart, deltaMin).minRevers} :{" "}
          {Time(timeStart, deltaMin).secRevers}
        </div>
      );
    }
  }, 1000);

  async function Delete() {
    try {
      console.log(
        "Click: Остановить работу по маршрутной карте серии: " + ObjWork.series
      );
      await deleteMaps(ObjWork.series, currentUser.email).finally(() => {
        toggleMessage({
          type: "success",
          message: "Maps delete successfully!",
        });
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
    <div className={styles.oneWork}>
      <div className={styles.oneWorkInfo}>
        <h2>{ObjWork.methodName}</h2>
        Current stage:{stageActive + 1} {ObjWork.nameStages[stageActive]}
        <p>Type work: {ObjWork.type}</p>
        <p>
          Temperature: {ObjWork.temperatures[stageActive]}°C; Time:{" "}
          {ObjWork.times[stageActive]} min
        </p>
      </div>
      <div className={styles.oneWorkTimer}>{timer}</div>
      <div className={styles.oneWorkManagement}>
        <div
          className={styles.oneWorkButton + " " + themeActive.borderWishHover}
        >
          <GrChapterNext style={{ fontSize: 32 }} />
          <br />
          Next stage
        </div>
        <div
          className={styles.oneWorkButton + " " + themeActive.borderWishHover}
          onClick={() => {
            Delete();
          }}
        >
          <RiDeleteBin5Line style={{ fontSize: 32 }} /> <br />
          Delete work
        </div>
      </div>
    </div>
  );
}
