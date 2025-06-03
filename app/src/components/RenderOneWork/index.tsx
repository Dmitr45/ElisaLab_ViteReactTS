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

  useEffect(() => {
    console.log("ObjWork.start =" + new Date(ObjWork.start));
    setTimeStart(Math.floor(ObjWork.start * 1000));
    setDeltaMin(ObjWork.times[ObjWork.numberStage]);
  }, []);

  useInterval(() => {
    if (
      Time(ObjWork.start, deltaMin).hourRevers === 0 &&
      Time(ObjWork.start, deltaMin).minRevers === 0 &&
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
        Route map series №{ObjWork.series} Current stage:
        {ObjWork.numberStage + 1}
      </div>
      <div className={styles.oneWorkTimer}>{timer}</div>
      <div className={styles.Management}>
        <div className={styles.oneWorkButton}>Next stage</div>
        <div className={styles.oneWorkButton}>Pause</div>
        <div className={styles.oneWorkButton}>Delete work</div>
      </div>
    </div>
  );
}
