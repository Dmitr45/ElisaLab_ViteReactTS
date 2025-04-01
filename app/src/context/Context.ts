import { useState, useCallback, useEffect } from "react";
import { NameObjType } from "./types";
import DarkTheme from "../components/Theme/DarkTheme.module.scss";
import LightTheme from "../components/Theme/LightTheme.module.scss";
import { Log } from "../fireBase/";
import { userUidI } from "./types";

export const useCreateAppContext = function (props: any) {
  // Входные данные: ============================================================================================================

  //localStorage.clear();

  const NameApp: NameObjType = {
    name: "Elisa",
    span: "Lab",
    slogan: "Assistant in laboratory diagnostics",
  };

  // API
  const apiURL = "https://pletnevd.com/api/";
  const authURL = "https://pletnevd.com/auth/";

  //Base initiation
  Log();

  // Контекст для приложения ====================================================================================================
  const [darkThemeContext, setDarkThemeContext] = useState<boolean>(
    props.darkThemeContext ||
      (() => {
        if (localStorage.getItem("DarkTheme") == "Active") {
          return true;
        } else {
          return false;
        }
      })
  );
  const toggleDarkThemeContext = useCallback((bool: boolean): string => {
    setDarkThemeContext(bool);
    return "Ok";
  }, []);

  const [themeActive, setThemeActive] = useState(DarkTheme);

  useEffect(() => {
    if (darkThemeContext === true) {
      setThemeActive(DarkTheme);
      localStorage.setItem("DarkTheme", "Active");
      localStorage.removeItem("LightTheme");
      console.log("DarkTheme:  " + localStorage.getItem("DarkTheme"));
    }
    if (darkThemeContext === false) {
      setThemeActive(LightTheme);
      localStorage.setItem("LightTheme", "Active");
      localStorage.removeItem("DarkTheme");
      console.log("LightTheme:  " + localStorage.getItem("LightTheme"));
    }
  }, [darkThemeContext]);

  const [pageActive, setPageActive] = useState<number>(props.pageActive || 0);
  const togglePageActive = useCallback((page: number) => {
    setPageActive(page);
    return "Ok";
  }, []);

  //Контекст для авторизации =============================================================================
  const [tokenAuth, setTokenAuth] = useState<userUidI>({ uid: "" });
  const toggleTokenAuth = useCallback((obj: userUidI) => {
    setTokenAuth(obj);
  }, []);

  useEffect(() => {
    //setTokenAuth(FireBase.authState("user"));
    console.log("Токен авторизации: " + tokenAuth.uid);
  }, []);

  // const [controllerTokenAuth, setControllerTokenAuth] = useState<string>("");
  // const toggleControllerTokenAuth = useCallback((token: string) => {
  //   setControllerTokenAuth(token);
  //   return "Ok";
  // }, []);

  // useEffect(() => {
  //   switch (controllerTokenAuth) {
  //     case "exit":
  //       {
  //         localStorage.removeItem("TokenAuth");
  //         setTokenAuth("");
  //         console.log("Выход из аккаунта!");
  //       }
  //       break;
  //     case "":
  //       {
  //         if (localStorage.getItem("TokenAuth")) {
  //           //@ts-expect-error
  //           setAddTokenAuth(localStorage.getItem("TokenAuth"));
  //           console.log("Вы авторизованы!");
  //         } else {
  //           console.log("Вы не авторизованы!");
  //         }
  //       }
  //       break;
  //     default: {
  //       localStorage.setItem("TokenAuth", controllerTokenAuth);
  //       setTokenAuth(controllerTokenAuth);
  //       console.log("Вы авторизованы!");
  //     }
  //   }
  // }, [controllerTokenAuth]);

  //Контекст для SimpleTimer =============================================================================
  //localStorage.setItem(startTime_simpleTimer, Date.now().toString() );

  const [deltaSimpleTime, setDeltaSimpleTime] = useState<number>(
    props.deltaTime || 5
  ); // на сколько минут таймер
  const toggleDeltaSimpleTime = useCallback((minut: number): void => {
    setDeltaSimpleTime(minut);
  }, []);

  const [localStorageRefresh, setLocalStorageRefresh] = useState<number>(
    props.localStorageRefresh || 0
  ); // на сколько минут таймер
  const toggLocalStorageRefresh = useCallback((msec: number): void => {
    setLocalStorageRefresh(msec);
  }, []);

  const [timeSimpleRender, setTimeSimpleRenred] = useState<number>(
    props.timeSimpleRender || 0
  ); // мин
  const toggTimeSimpleRenred = useCallback((min: number): void => {
    setTimeSimpleRenred(min);
  }, []);

  //======================================================================================================
  return {
    darkThemeContext,
    toggleDarkThemeContext,
    themeActive,
    NameApp,
    pageActive,
    togglePageActive,
    //====авторизация====
    tokenAuth,
    toggleTokenAuth,

    //=====SimpleTimer
    deltaSimpleTime,
    toggleDeltaSimpleTime, // На какое время запущен таймер,  мин
    timeSimpleRender,
    toggTimeSimpleRenred, // Оставшееся время на таймере Simple
    localStorageRefresh,
    toggLocalStorageRefresh, // Дата последнего изменения  LocalStorage

    //=====API
    apiURL,
    authURL, // baseURL для запросов к серверу
  };
};
