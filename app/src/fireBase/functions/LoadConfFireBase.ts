interface fireBaseI {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export async function loadFireBaseConfig(
  link_config_json: string
): Promise<fireBaseI> {
  let conf: fireBaseI = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };

  try {
    await fetch(link_config_json)
      .then((response) => response.json()) // Обращаемся к серверу в формате, читаем ответ в формате JSON
      .then((response) => (conf = response));
    console.log(
      "loadFireBaseConfig загрузил данные конфигурации firebase с сервера"
    );
    return conf;
  } catch (err) {
    console.log(
      "loadFireBaseConfig НЕ загрузил данные конфигурации firebase с сервера, ошибка: " +
        err
    );
    return conf;
  }
}
