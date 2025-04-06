import { useAppContext } from "../../context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { NameAppType, NameObjType, pageActiveType } from "../../context/types";

export function Header() {
  const {
    toggleDarkThemeContext,
    darkThemeContext,
    themeActive,
    NameApp,
    pageActive,
    togglePageActive,
    errorMessage,
  }: {
    themeActive: { readonly [key: string]: string };
    pageActive: pageActiveType;
    toggleDarkThemeContext: { (bool: boolean): string };
    darkThemeContext: boolean;
    togglePageActive: { (page: number): string };
    NameApp: NameAppType;
    errorMessage: string;
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
      <div
        className={styles.error}
        style={errorMessage.length > 1 ? { opacity: 1 } : { opacity: 0 }}
      >
        {errorMessage}
      </div>
    </div>
  );
}
