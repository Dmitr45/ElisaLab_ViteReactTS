import style from "../styles.module.scss";
// import { useSound } from 'use-sound';
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType } from "../../context/types";

export function Alarm() {
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();
  // const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan};
  // const [play] = useSound("../../components/sound/Finish.mp3");

  return (
    <div className={style.page}>
      <div className={style.logo}>
        <div className={themeActive.logo}>
          На один <br />
          <span>шаг вперёд</span>
          <br />
          !!!
        </div>
        <div className={style.podLogo}>
          <div className={themeActive.podLogo}></div>
        </div>
      </div>
    </div>
  );
}
