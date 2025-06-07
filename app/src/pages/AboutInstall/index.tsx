import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  NameAppType,
  themeActiveType,
  togglePageActiveType,
} from "../../context/types";

export function AboutInstall() {
  const {
    themeActive,
  }: {
    themeActive: themeActiveType;
    NameApp: NameAppType;
    togglePageActive: togglePageActiveType;
  } = useAppContext();

  return (
    <div className={style.page + " " + themeActive.page}>
      <div className={style.container}>
        <div className={style.logo}>
          <div className={themeActive.logo}>
            ELISA
            <span>_Install</span>
          </div>
          <div className={style.podLogo}>
            <div className={themeActive.podLogo}>Установка приложения</div>
          </div>
        </div>
        <h2>Mobile</h2>
        <p>
          Для установки приложения на мобильное устройство, откройте сайт
          elisalab.ru в браузере. Нажмите на вкладку "Добавить на главный экран"
          в правом верхнем углуменю браузера:
          <a href="https://www.google.co.ug/intl/ru/chrome/" target="blank">
            Google Chrome Web
          </a>{" "}
          <div>
            <img
              src="/installImage/mobile1.jpg"
              alt="mobile1.jpg"
              style={{ margin: "0 auto", padding: 20, width: 250 }}
            ></img>
          </div>
          После этого приложение будет добавлено на главный экран вашего
          устройства.
          <div>
            <img
              src="/installImage/mobile2.jpg"
              alt="mobile2.jpg"
              style={{ margin: "0 auto", padding: 20, width: 250 }}
            ></img>
          </div>
          Теперь вы можете открыть приложение, нажав на его иконку на главном
          <div>
            <img
              src="/installImage/mobile3.jpg"
              alt="mobile3.jpg"
              style={{ margin: "0 auto", padding: 20, width: 250 }}
            ></img>
          </div>
        </p>
        <h2>Desktop</h2>
        <p>
          Для установки приложения на компьютер, откройте сайт elisalab.ru в
          браузере Google Chrome Web.
          <div>
            <img
              src="/installImage/Chrom1.PNG"
              alt="Chrom1.PNG"
              style={{ margin: "0 auto", padding: 20, width: "80%" }}
            ></img>
          </div>
          Нажмите на кнопку "Установить приложение" в адресной строке браузера.
          <div>
            <img
              src="/installImage/Chrom2.PNG"
              alt="Chrom2.PNG"
              style={{ margin: "0 auto", padding: 20, width: "80%" }}
            ></img>
          </div>
          После этого приложение будет добавлено на рабочий стол вашего
          компьютера.
          <div>
            <img
              src="/installImage/Chrom3.PNG"
              alt="Chrom3.PNG"
              style={{ margin: "0 auto", padding: 20, width: "80%" }}
            ></img>
          </div>
        </p>
      </div>
    </div>
  );
}
