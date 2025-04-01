// Инициализация Firebase
// Приложение Firebase — это объект, похожий на контейнер, который хранит общую конфигурацию и использует аутентификацию для всех служб Firebase.
// После инициализации объекта приложения Firebase в своем коде вы можете добавить службы Firebase и начать использовать их.
// https://firebase.google.com/docs/web/setup?hl=ru

import { loadFireBaseConfig } from "./LoadConfFireBase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const LINK: string = "https://pletnevd.com/api/json/?file=firebaseConfig";
export const FireConfig = await loadFireBaseConfig(LINK); // Загрузка конфигурации FireBase

export const Log = () =>
  console.log("Конфигурация FireBase: " + FireConfig.authDomain);

const appFireBase = initializeApp(FireConfig); // Инициализация FireBase
export const auth = getAuth(appFireBase); // Инициализация Аунтетификации
