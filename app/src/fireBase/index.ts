// Инициализация Firebase
// Приложение Firebase — это объект, похожий на контейнер, который хранит общую конфигурацию и использует аутентификацию для всех служб Firebase.
// После инициализации объекта приложения Firebase в своем коде вы можете добавить службы Firebase и начать использовать их.
// https://firebase.google.com/docs/web/setup?hl=ru

import { loadFireBaseConfig } from "./functions/LoadConfFireBase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const LINK: string = "https://pletnevd.com/api/json/?file=firebaseConfig";
const FireConfig = await loadFireBaseConfig(LINK); // Загрузка конфигурации FireBase

export const appFireBase = initializeApp(FireConfig); // Инициализация FireBase
export const authFireBase = getAuth(appFireBase); // Инициализация Аунтетификации
export const dataFireBase = getFirestore(appFireBase); // Инициализация Базы данных
