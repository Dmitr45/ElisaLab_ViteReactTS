"use client";
import { useAppContext } from "../../context/ContextProvider";
import { NameAppType, themeActiveType } from "../../context/types";
import { RegistrationForm } from "../../fireBase/Auth/Registration";
import style from "../styles.module.scss";

export function Registration() {
  const {
    themeActive,
  }: { themeActive: themeActiveType; NameApp: NameAppType } = useAppContext();

  return (
    <div className={themeActive.section}>
      <div className={style.page + " " + themeActive.page}>
        <div className={style.logo}>
          {/* <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div> */}
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
