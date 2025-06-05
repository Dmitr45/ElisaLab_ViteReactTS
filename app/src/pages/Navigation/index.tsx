import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { togglePageActiveType, themeActiveType } from "../../context/types";

export function Navigation() {
  const {
    themeActive,
    togglePageActive,
  }: { togglePageActive: togglePageActiveType; themeActive: themeActiveType } =
    useAppContext();

  return (
    <div className={style.page + " " + themeActive.page}>
      {/* <div onClick={()=>{togglePageActive(0)}} className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div> */}
      <div
        onClick={() => {
          togglePageActive(16);
        }}
        className={style.pageTitle + " " + themeActive.link}
      >
        Standard schemes ELISA
      </div>
      <div
        onClick={() => {
          togglePageActive(10);
        }}
        className={style.pageTitle + " " + themeActive.link}
      >
        About the application
      </div>
    </div>
  );
}
