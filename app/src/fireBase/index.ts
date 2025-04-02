// Инициализация Firebase
// Приложение Firebase — это объект, похожий на контейнер, который хранит общую конфигурацию и использует аутентификацию для всех служб Firebase.
// После инициализации объекта приложения Firebase в своем коде вы можете добавить службы Firebase и начать использовать их.
// https://firebase.google.com/docs/web/setup?hl=ru

import { loadFireBaseConfig } from "./LoadConfFireBase";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const LINK: string = "https://pletnevd.com/api/json/?file=firebaseConfig";
export const FireConfig = await loadFireBaseConfig(LINK); // Загрузка конфигурации FireBase

export const Log = () =>
  console.log("Конфигурация FireBase: " + FireConfig.authDomain);

const appFireBase = initializeApp(FireConfig); // Инициализация FireBase

// Аунтетификации
const auth = getAuth(appFireBase); // Инициализация Аунтетификации

export async function SingIn(email: string, password: string) {
  // Вход в аккаунт
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

// Состояние пользователя
export async function AuthState(params: type) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
