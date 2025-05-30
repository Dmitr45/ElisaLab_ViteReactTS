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

  const [data, setData] = useState<IRunMethodsState[]>([
    {
      numberStage: 0,
      start: 0,
      series: 0,
    },
  ]);

  useEffect(() => {
    if (currentUser) {
      getDataState(currentUser.email).then((data) => {
        setData(data || []);
      });
    }
  }, []);

  return (
    <div className={themeActive.section}>
      <div className={styles.page + " " + themeActive.page}>
        <div className={styles.container}>
          <div className={styles.pageTitle}>Work</div>

          {"Series№  " +
            data[0].series +
            " |  " +
            "Stage :  " +
            (data[0].numberStage + 1) +
            " |  " +
            "Начало :  " +
            new Date(data[0].start * 10).toLocaleString()}

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
        </div>
      </div>
    </div>
  );
}
