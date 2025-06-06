import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType } from "../../context/types";
import { InputRangeTime } from "../../components/Timer/InputRangeTime";
import { StartButton } from "../../components/Timer/StartButton";

export function FormSimpleTimer() {
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();
  // const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan};

  return (
    <div className={style.page + " " + themeActive.page}>
      {/* <div className={style.logo}>
        <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
        </div>
        <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div>
        </div>
    </div> */}
      <InputRangeTime />
      <StartButton />
    </div>
  );
}
