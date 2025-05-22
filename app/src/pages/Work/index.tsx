import styles from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType, togglePageActiveType } from "../../context/types";
import { TbMessageQuestion } from "react-icons/tb";

export function WorkPage() {
  const {
    themeActive,
    togglePageActive,
  }: { themeActive: themeActiveType; togglePageActive: togglePageActiveType } =
    useAppContext();
  return (
    <div className={themeActive.section}>
      <div className={styles.page + " " + themeActive.page}>
        <div className={styles.container}>
          <div className={styles.pageTitle}>Work</div>
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
