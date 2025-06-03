import { useEffect, useState } from "react";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import useInterval from "use-interval";
import { Time } from "../../logics/timeNow";
import styles from "./styles.module.scss";

export function RenderOneWork({ ObjWork }: { ObjWork: IRunMethodsState }) {
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
      <div className={styles.Management}>
        <div className={styles.oneWorkButton}>Next stage</div>
        <p></p>
        <div className={styles.oneWorkButton}>Delete work</div>
      </div>
    </div>
  );
}
