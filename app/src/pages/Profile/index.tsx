import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType } from "../../context/types";
import style from "./styles.module.scss";
import { useAuth } from "../../fireBase/AuthProvider";
import { doSignOut } from "../../fireBase/auth";

export function Profile() {
  //    const  {NameApp } : {themeActive: themeActiveType, NameApp: NameAppType} =  useAppContext();
  //@ts-expect-error  ???
  const { currentUser } = useAuth();
  const { themeActive }: { themeActive: themeActiveType } = useAppContext();

  return (
    <div className={themeActive.section}>
      <div className={style.page}>
        <p>Личный кабинет:</p>
        <p>
          {" "}
          Ваше имя:{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : "Пока не внесено"}
        </p>
        <p> Ваш email: {currentUser.email} </p>
        <p> Для выхода из аккаунта нажмите на кнопку:</p>
        <button onClick={doSignOut}>Sign Out</button>
      </div>
    </div>
  );
}
