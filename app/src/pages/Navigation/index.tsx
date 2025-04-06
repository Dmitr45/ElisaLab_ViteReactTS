"use client";
import style from "./styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { togglePageActiveType, themeActiveType } from "../../context/types";

export function Navigation() {
  const {
    themeActive,
    togglePageActive,
  }: { togglePageActive: togglePageActiveType; themeActive: themeActiveType } =
    useAppContext();

  return (
    <div className={style.page}>
      <div className={style.logo}>
        {/* <div onClick={()=>{togglePageActive(0)}} className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div> */}
        <div
          onClick={() => {
            togglePageActive(4);
          }}
          className={themeActive.podLogo}
        >
          Профайл
        </div>
        <div
          onClick={() => {
            togglePageActive(0);
          }}
          className={themeActive.podLogo}
        >
          О приложении
        </div>
      </div>
    </div>
  );
}
