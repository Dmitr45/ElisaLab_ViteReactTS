import { useAppContext } from "../../context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import {
  NameAppType,
  NameObjType,
  pageActiveType,
  MessageIType,
} from "../../context/types";

export function Header() {
  const {
    toggleDarkThemeContext,
    darkThemeContext,
    themeActive,
    NameApp,
    pageActive,
    togglePageActive,
    messageSend,
  }: {
    themeActive: { readonly [key: string]: string };
    pageActive: pageActiveType;
    toggleDarkThemeContext: { (bool: boolean): string };
    darkThemeContext: boolean;
    togglePageActive: { (page: number): string };
    NameApp: NameAppType;
    messageSend: MessageIType;
  } = useAppContext(); // Переключение темы

  const Title: NameObjType = {
    name: NameApp.name,
    span: NameApp.span,
    slogan: NameApp.slogan,
  };

  const [onchegeTheme, setOncchengeTheme] = useState<boolean>(darkThemeContext);

  useEffect(() => {
    toggleDarkThemeContext(onchegeTheme);
  }, [onchegeTheme, darkThemeContext]);

  const messageRunStyle = (obj: MessageIType) => {
    switch (obj.type) {
      case "none":
        return { opacity: 0, background: "#fff" };
      case "error":
        return { opacity: 1, background: "#cf2069" };
      case "success":
        return { opacity: 1, background: "green" };
      case "warning":
        return { opacity: 1, background: "#fce883" };
    }
  };

  return (
    <div className={themeActive.section}>
      <div className={styles.header}>
        {pageActive === 0 ? (
          <div
            className={styles.theme}
            onClick={() => {
              setOncchengeTheme(!onchegeTheme);
            }}
          >
            <p>{onchegeTheme ? " Light mode " : " Darck mode "}</p>
          </div>
        ) : (
          <div className={styles.logo}>
            <div
              className={themeActive.logo}
              onClick={() => {
                togglePageActive(0);
              }}
            >
              {Title.name}
              <span>{Title.span}</span>
            </div>
          </div>
        )}
        <div className={themeActive.burger}>
          <div
            className={styles.burg}
            onClick={() => {
              togglePageActive(3);
            }}
          ></div>
        </div>
      </div>
      <div className={styles.error} style={messageRunStyle(messageSend)}>
        {messageSend.message}
      </div>
    </div>
  );
}
