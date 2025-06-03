import styles from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  themeActiveType,
  toggleMessageType,
  togglePageActiveType,
} from "../../context/types";
import { TbMessageQuestion } from "react-icons/tb";
import { getDataState } from "../../fireBase/runMethodsState/getDataState";
import { useEffect, useState } from "react";
import { IRunMethodsState } from "../../fireBase/runMethodsState/types";
import { RenderOneWork } from "../../components/RenderOneWork";
import useInterval from "use-interval";
import { Time } from "../../logics/timeNow";

export function WorkPage() {
  const {
    themeActive,
    togglePageActive,
    currentUser,
  }: {
    themeActive: themeActiveType;
    togglePageActive: togglePageActiveType;
    currentUser: any;
    toggleMessage: toggleMessageType;
  } = useAppContext();

  const [data, setData] = useState<IRunMethodsState[]>([]);
  const [timeNow, setTimeNow] = useState(<span> 00: 00: 00</span>);

  useEffect(() => {
    if (currentUser) {
      getDataState(currentUser.email).then((data) => {
        if (data !== null && data.length > 0) {
          setData(data);
        }
      });
    }
  }, []);

  useInterval(() => {
    setTimeNow(
      <span>
        {" "}
        {Time().hoursNow} : {Time().minNow} : {Time().secNow}{" "}
      </span>
    );
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
          {data.length > 0 ? (
            data.map((oneWork) => {
              return <RenderOneWork ObjWork={oneWork} />;
            })
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
