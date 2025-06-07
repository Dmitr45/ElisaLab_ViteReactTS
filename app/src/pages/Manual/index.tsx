import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  NameAppType,
  themeActiveType,
  togglePageActiveType,
} from "../../context/types";

export function Manual() {
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
            Instruction
            <span>_Manual</span>
          </div>
          <div className={style.podLogo}>
            <div className={themeActive.podLogo}>
              Инструкция использования приложения
            </div>
          </div>
        </div>
        <h2>Mobile</h2>
        <div>
          <img
            src="/manual/1.jpg"
            alt="1.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        Стоит начать использование приложения с регистрации. Это позволит вам
        создать учетную запись и получить доступ личным методам и протоколам,
        которые будут доступны только вам. Также, вы сможете сохранять
        маршрутные карты ИФА и отслеживать свою историю.
        <div>
          <img
            src="/manual/2.jpg"
            alt="2.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        <div>
          <img
            src="/manual/3.jpg"
            alt="3.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        Выберите метод, который вы хотите использовать. Вы можете выбрать один
        из предустановленных методов или создать свой собственный.
        <div>
          <img
            src="/manual/4.jpg"
            alt="4.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        <div>
          <img
            src="/manual/5.jpg"
            alt="5.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        После выбора метода, вы можете начать работу с ним. Вы можете настроить
        параметры метода, добавить свои собственные данные. Также, вы можете
        сохранить метод ИФА под своим именем, чтобы использовать ее в будущем.
        <div>
          <img
            src="/manual/6.jpg"
            alt="6.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        Запустите метод, нажав на кнопку "Start work". Вы можете отслеживать
        таймер текущей стадии и видеть результаты в реальном времени. После
        истечения времени таймера раздастся звукойвой сигнал и вы сможете
        переключиться на следующий этап нажав на кнопку "Next stage". Или
        закончить работу нажав на кнопку "Delete work".
        <div>
          <img
            src="/manual/7.jpg"
            alt="7.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
        Вы всегда можете посмотреть историю своих работ, нажав на кнопку
        "History". Здесь вы можете увидеть все свои работы.
        <div>
          <img
            src="/manual/8.jpg"
            alt="8.jpg"
            style={{ margin: "0 auto", padding: 20, width: 250 }}
          ></img>
        </div>
      </div>
    </div>
  );
}
