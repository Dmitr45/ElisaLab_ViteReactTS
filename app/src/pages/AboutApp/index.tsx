import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import {
  NameAppType,
  NameObjType,
  themeActiveType,
  togglePageActiveType,
} from "../../context/types";

export function About() {
  const {
    themeActive,
    NameApp,
    togglePageActive,
  }: {
    themeActive: themeActiveType;
    NameApp: NameAppType;
    togglePageActive: togglePageActiveType;
  } = useAppContext();
  const Title: NameObjType = {
    name: NameApp.name,
    span: NameApp.span,
    slogan: NameApp.slogan,
  };

  return (
    <div className={style.page + " " + themeActive.page}>
      <div className={style.container}>
        <div className={style.logo}>
          <div className={themeActive.logo}>
            {Title.name}
            <span>{Title.span}</span>
          </div>
          <div className={style.podLogo}>
            <div className={themeActive.podLogo}>
              Иммуноферментный анализ в web и мобильном приложении
            </div>
          </div>
        </div>

        <p>
          Цель приложения: <br />
          Данное приложение разработано для лаборантов
          поликлиник/диагностических центров, таких как ИНВИТРО, занятых в
          диагностике вирусных/бактериальных инфекций методами Иммуноферментного
          (ИФА) анализа. Проведение ИФА анализа требует от сотрудника
          собранности и внимательности. Работа связана с многостадийными
          этапами, которые чередуются через разное время и в разных условиях.
        </p>
        <p>
          <b>
            Приложение ElisaLab является тайм-трекером, который будет вам
            помогать в точности соблюсти инструкцию к набору ИФА.
          </b>
        </p>
        <p>
          В настоящее время лаборанту ИФА анализа приходится руководствоваться
          инструкцией и засекать время текущей стадии на таймере или по часам.
          После каждого этапа приходится заглядывать в инструкцию и искать
          параметры следующей стадии. Это не очень удобно и потенциально может
          приводить к ошибкам, особенно если лаборант делает несколько
          постановок одновременно.
        </p>
        <p>
          Я предлагаю тайм-трекер, который будет подсказывать Step by Step на
          каком этапе анализа вы находитесь, какая стадия следующая, какие
          условия нужно соблюсти и т.д.
        </p>
        <p>
          Начинать работу необходимо с выбора протокола. Здесь у Вас есть
          следующие возможности:
        </p>
        <div style={{ marginLeft: "10px" }}>
          <ol style={{ marginLeft: "20px" }}>
            <li>Выбрать отдельную стадию</li>
            <li>Выбрать цельный протокол из стандартных методов</li>
            <li>Выбрать протокол из созданных вами методов</li>
            <li>
              Навести телефоном на QR Сode ИФА набора и загрузить протокол
            </li>
          </ol>
        </div>
        <button
          onClick={() => {
            togglePageActive(11);
          }}
        >
          Выбор протокола
        </button>

        <p>
          В приложении пользователь авторизован и все действия дублируются на
          сервере. Трекер будет работать даже если закроется приложение и даже
          если выключится телефон - при его включении трекер загрузит актуальные
          данные с сервера используя вашу учетную запись.
        </p>
        <button
          onClick={() => {
            togglePageActive(1);
          }}
        >
          Авторизоваться
        </button>
        <p>
          Законченные методы остаются в вашей личной истории. Их можно в любое
          время посмотреть. Естественно, для сохранения истории вы должны быть
          авторизованы.
        </p>
        <button
          onClick={() => {
            togglePageActive(13);
          }}
        >
          Маршрутные карты
        </button>
        <div>
          <p>
            Автор приложения: <br /> Плетнев Дмитрий Николаевич
            <br />
            Сайт разработчика:
            <br />
            <a
              href="https://pletnevd.com"
              target="_blank"
              style={{ textDecoration: "underline", color: "#000" }}
            >
              PletnevD.com
            </a>
            <br />
            <br />
            Стек технологий
            <br />
            Domen: ElisaLab.ru <br />
            FrontEnd: React.js Vite TypeScript SCSS <br />
            BackEnd: Server Ubuntu 22.04 LTS Node.js Epress.js
            <br />
            Database: Google FireBase <br />
            Android: React Native <br />
          </p>
        </div>
      </div>
    </div>
  );
}
