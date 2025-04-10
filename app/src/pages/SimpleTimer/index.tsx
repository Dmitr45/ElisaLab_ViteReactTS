import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType } from "../../context/types";
import { SimpleTimer } from "../../components/Timer/SimpleTimer";
import { StopButton } from "../../components/Timer/StopButton";

export function SimpleTimerPage() {
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();
  return (
    <div className={style.page + " " + themeActive.page}>
      {/* <div className={style.logo}>
        <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
        </div>
        <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div>
        </div>
    </div> */}
      <SimpleTimer />
      <StopButton />
    </div>
  );
}
