import style from "../styles.module.scss";
import { useAppContext } from "../../context/ContextProvider";
import { NameAppType, NameObjType, themeActiveType } from "../../context/types";

export function About() {
  const {
    themeActive,
    NameApp,
  }: { themeActive: themeActiveType; NameApp: NameAppType } = useAppContext();
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
              Иммуноферментный анализ в мобильном приложении
            </div>
          </div>
        </div>

        <p>
          Цель проекта: <br />
          Разработка приложения для лаборантов поликлиник/диагностических
          центров, таких как ИНВИТРО, занятых в диагностике
          вирусных/бактериальных инфекций методами Иммуноферментного (ИФА)
          анализа.
        </p>
        <p>
          ИФА анализ - это многостадийный процесс, в котором разные стадии
          анализа занимают разное количество времени и в разных температурных
          режимах. В настоящее лаборанту руководствоваться инструкцией и
          засекать время текущей стадии на таймере или по часам. Это не очень
          удобно и потенциально может приводить к ошибкам, особенно если
          лаборант делает несколько постановок одновременно.
        </p>
        <p>
          Мы предлагаем приложение-помощника, будет подсказывать Step by Step на
          какой стадии анализа процесс, когда он закончится и какая стадия
          следующая.
        </p>
        <p>
          При работе выбирается протокол, который уже в себе содержит основные
          этапы анализа.
        </p>
        <p>
          В приложении пользователь авторизован и все действия дублируются на
          сервере. Трекер будет работать даже если закроется приложение и даже
          если выключится телефон - при его включении трекер актуальные данные.
          Когда наступит время для начала следующей стадии трекер подаст
          звуковой сигнал и выведет сообщении на экран телефона. Останется
          только манипуляции над планшетой и нажать «Далее». Для оформления
          документации легко можно заглянуть в историю и найти предыдущие
          постановки.
        </p>
        <p>
          Автор приложения: Плетнев Дмитрий Николаевич
          <br />
          Сайт разработчика:{" "}
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
          Android: React Native <br />
          BackEnd: Server Ubuntu 22.04 LTS Node.js <br />
          FrontEnd: React.js Vite TypeScript <br />
          Database: Google FireBase <br />
        </p>
      </div>
    </div>
  );
}
