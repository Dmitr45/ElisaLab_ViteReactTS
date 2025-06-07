import styles from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
  rebootWorkPageType,
  toggleRebootWorkPageType,
} from "../../context/types";
import { TbMessageQuestion } from "react-icons/tb";
import { getDataState } from "../../fireBase/runMethodsState/getDataState";
import { useCallback, useEffect, useState } from "react";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import { RenderOneWork } from "../../components/RenderOneWork";
import useInterval from "use-interval";
import useForceUpdate from "use-force-update";

export function WorkPage() {
  const {
    themeActive,
    togglePageActive,
    currentUser,
    rebootWorkPage,
    toggleRebootWorkPage,
  }: {
    themeActive: themeActiveType;
    togglePageActive: togglePageActiveType;
    currentUser: any;
    toggleMessage: toggleMessageType;
    rebootWorkPage: rebootWorkPageType;
    toggleRebootWorkPage: toggleRebootWorkPageType;
  } = useAppContext();

  const [data, setData] = useState<IRunMethodsState[]>([]);
  const [timeNow, setTimeNow] = useState(<span> 00: 00: 00</span>);
  const forceUpdate = useForceUpdate();

  const NotWork = (
    <div>
      <div className={styles.methodTitle}>
        You don't have any protocol running.
      </div>
      <button
        onClick={() => {
          togglePageActive(11);
        }}
      >
        Select method&nbsp;
        <TbMessageQuestion />
      </button>
    </div>
  );

  const [mapsArr, setMapsArr] = useState([NotWork]);
  const [nextStepCoun, setNextStepCoun] = useState(0);

  useEffect(() => {
    if (currentUser) {
      getDataState(currentUser.email).then((data) => {
        if (data !== null && data.length > 0) {
          setData(data);
          setNextStepCoun(nextStepCoun + 1);
          toggleRebootWorkPage(false);
        }
      });
    }
    console.log("WorkPage useEffect rebootWorkPage: ", rebootWorkPage);
    forceUpdate();
  }, [rebootWorkPage]);

  useEffect(() => {
    setMapsArr(() => {
      if (data.length === 0) {
        return [NotWork];
      } else {
        const works = data.filter((oneWork) => oneWork.series !== 0);
        if (works[0]) {
          return works.map((oneWork) => {
            return <RenderOneWork ObjWork={oneWork} />;
          });
        } else {
          return [NotWork];
        }
      }
    });
    forceUpdate();
  }, [data, nextStepCoun]);

  const Render = useCallback(() => {
    return mapsArr;
  }, [mapsArr, nextStepCoun]);
  // Update the time every second

  useInterval(() => {
    setTimeNow(<span> {new Date().toLocaleTimeString()}</span>);
  }, 1000);

  return (
    <div className={themeActive.section}>
      <div className={styles.page + " " + themeActive.page}>
        <div className={styles.container}>
          <div className={styles.pageTitle}>
            Work
            <div className={styles.time} style={{ fontSize: 16 }}>
              Time: {timeNow}
            </div>
          </div>
          <div>
            <Render />
          </div>
        </div>
      </div>
    </div>
  );
}
