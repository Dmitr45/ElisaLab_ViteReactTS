import { useAppContext } from "../../context/ContextProvider";
import styles from "./footer.module.scss";
import { themeActiveType, togglePageActiveType } from "../../context/types";

export function Footer() {
  const {
    themeActive,
    togglePageActive,
  }: { themeActive: themeActiveType; togglePageActive: togglePageActiveType } =
    useAppContext();
  return (
    <div className={themeActive.section}>
      <div className={themeActive.footerSect}>
        <div className={styles.footer}>
          <div
            className={styles.addMetod}
            onClick={() => {
              togglePageActive(11);
            }}
          >
            {" "}
          </div>
          <div
            className={styles.editMetod}
            onClick={() => {
              togglePageActive(12);
            }}
          >
            {" "}
          </div>
          <div
            className={styles.startMetod}
            onClick={() => {
              togglePageActive(14);
            }}
          >
            {" "}
          </div>
          <div
            className={styles.history}
            onClick={() => {
              togglePageActive(13);
            }}
          >
            {" "}
          </div>
          <div
            className={styles.user}
            onClick={() => {
              togglePageActive(4);
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
