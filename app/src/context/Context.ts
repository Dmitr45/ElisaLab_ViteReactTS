import { useState, useCallback, useEffect } from "react";
import { NameObjType, MessageIType } from "./types";
import DarkTheme from "../components/Theme/DarkTheme.module.scss";
import LightTheme from "../components/Theme/LightTheme.module.scss";
import { IMethod } from "../fireBase/MethodsData/types";
import { IRouteMap } from "../fireBase/RouteMaps/types";
import { getHistoryMaps } from "../fireBase/RouteMaps/historyData";
import { authFireBase } from "../fireBase/index";
import { onAuthStateChanged } from "firebase/auth";

import { getUser, userIType } from "../fireBase/UsersProfileData/profile";

export const useCreateAppContext = function (props: any) {
  // Входные данные: ============================================================================================================

  //====Users=============================================

  // Cоздаем контекст авторизации
  const [currentUser, setCurrentUser] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [userData, setUserData] = useState<userIType | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFireBase, initializeUser);
    return unsubscribe;
  }, []);
  //@ts-expect-error ???
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      setUserData(await getUser(user.email));
    } else {
      //@ts-expect-error ???
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoadingAuth(false);
  }

  useEffect(() => {
    if (userLoggedIn) {
      //console.clear();
      console.log(`Добрый день, ${userData?.name}!`);
    }
  }, [userLoggedIn, userData]);

  //=======================================================
  //localStorage.clear();

  const NameApp: NameObjType = {
    name: "Elisa",
    span: "Lab",
    slogan: "Assistant in laboratory diagnostics",
  };

  // API
  const apiURL = "https://pletnevd.com/api/";
  const authURL = "https://pletnevd.com/auth/";

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
      //console.log("DarkTheme:  " + localStorage.getItem("DarkTheme"));
    }
    if (darkThemeContext === false) {
      setThemeActive(LightTheme);
      localStorage.setItem("LightTheme", "Active");
      localStorage.removeItem("DarkTheme");
      //console.log("LightTheme:  " + localStorage.getItem("LightTheme"));
    }
  }, [darkThemeContext]);

  const [pageActive, setPageActive] = useState<number>(props.pageActive || 0);
  const togglePageActive = useCallback((page: number) => {
    setPageActive(page);
    return "Ok";
  }, []);
  // ===Methods==========================================================================
  const [methodSelected, setMethodSelected] = useState<IMethod>(
    props.methodSelected || {
      id: "none",
      name: "The method is not selected. Please select the standard or your method.",
      type: "",
      stage: [],
    }
  );
  const toggleMethodSelected = useCallback((method: IMethod): void => {
    setMethodSelected(method);
  }, []);

  //===RouteMaps===========================================================================
  const [seriesMaps, setSeriesMaps] = useState<IRouteMap[]>(
    props.seriesMaps || [
      {
        series: 0,
        idMethod: "none",
        methodName: "none",
        type: "none",
        stage: [],
      },
    ]
  );
  const toggleSeriesMaps = useCallback((seriesMaps: IRouteMap[]): void => {
    setSeriesMaps(seriesMaps);
  }, []);

  const [historyMaps, setHistoryMaps] = useState<IRouteMap[]>(
    props.historyMaps || [
      {
        series: 0,
        idMethod: "none",
        methodName: "none",
        type: "none",
        stage: [],
      },
    ]
  );

  //=====HistoryMaps=========================================================
  const toggleHistoryMaps = useCallback((historyMaps: IRouteMap[]): void => {
    setHistoryMaps(historyMaps);
  }, []);
  useEffect(() => {
    // if (getHistoryMaps("dmitr45@yandex.ru") !== null) {
    getHistoryMaps("dmitr45@yandex.ru");
    // }
  }, []);

  // Ошибки и сообщения =============================================================================
  const [messageSend, setMessage] = useState<MessageIType>(
    props.messageSend || { type: "none", message: "none" }
  );
  const toggleMessage = useCallback((obj: MessageIType): void => {
    setMessage(obj);
  }, []);

  useEffect(() => {
    if (messageSend.message.length > 1) {
      setTimeout(() => {
        toggleMessage({ type: "none", message: "none" });
      }, 5000);
    }
  }, [messageSend]);

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
    //==Users=========================
    currentUser,
    userLoggedIn,
    loadingAuth,
    userData,
    //================================
    darkThemeContext,
    toggleDarkThemeContext,
    themeActive,
    NameApp,
    pageActive,
    togglePageActive,
    //====Error====
    messageSend,
    toggleMessage,
    //=====SimpleTimer
    deltaSimpleTime,
    toggleDeltaSimpleTime, // На какое время запущен таймер,  мин
    timeSimpleRender,
    toggTimeSimpleRenred, // Оставшееся время на таймере Simple
    localStorageRefresh,
    toggLocalStorageRefresh, // Дата последнего изменения  LocalStorage

    // Methods

    methodSelected,
    toggleMethodSelected,
    seriesMaps,
    toggleSeriesMaps,
    historyMaps,

    //=====API
    apiURL,
    authURL, // baseURL для запросов к серверу
  };
};
