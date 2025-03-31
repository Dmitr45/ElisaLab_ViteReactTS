import { initializeApp } from "firebase/app"; // https://firebase.google.com/docs/web/setup?hl=ru

// Инициализация Firebase
// Приложение Firebase — это объект, похожий на контейнер, который хранит общую конфигурацию и использует аутентификацию для всех служб Firebase.
// После инициализации объекта приложения Firebase в своем коде вы можете добавить службы Firebase и начать использовать их.
// https://firebase.google.com/docs/web/setup?hl=ru
// interface fireBaseI {
//   apiKey: string;
//   authDomain: string;
//   projectId: string;
//   storageBucket: string;
//   messagingSenderId: string;
//   appId: string;
//   measurementId: string;
// }

export async function fireBaseInitial(link_config_json: string): Promise<any> {
  let fireBaseApp;
  try {
    await fetch(link_config_json)
      .then((response) => response.json()) // Обращаемся к серверу в формате, читаем ответ в формате JSON
      .then((response) => (fireBaseApp = initializeApp(response)));
    console.log("Подключение к базе данных fireBase: OK");
    return fireBaseApp;
  } catch (err) {
    console.log("Подключение к базе данных fireBase с ошибкой: " + err);
    return fireBaseApp;
  }
}
