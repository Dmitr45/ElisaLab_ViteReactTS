import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType } from "../../context/types";
import { upperText } from "../../api/upperText/";

export function Test() {
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();

  return (
    <div className={style.page + " " + themeActive.page}>
      <div className={style.logo}>
        <div className={themeActive.logo}>
          T<span>est</span>
        </div>
        <button
          onClick={() => {
            console.log(upperText("gdgdgdfgdgdfg"));
          }}
        >
          ---Request---
        </button>
      </div>
    </div>
  );
}
