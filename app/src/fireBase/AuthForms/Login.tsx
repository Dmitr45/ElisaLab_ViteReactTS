import styles from "./styles.module.scss";
import { NavAuth } from "../../components/NavAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { doSignInWithEmailAndPassword } from "../../fireBase/auth";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/ContextProvider";
import {
  togglePageActiveType,
  toggleErrorMessageType,
} from "../../context/types";

interface IFormInput {
  login: string;
  password: string;
}

export function LoginForm() {
  // useForm ============================================================================
  const { register, handleSubmit } = useForm<IFormInput>();
  const [isSingningIn, setIsSingningIn] = useState<boolean>(false); // отправлен ли запрос на авторизацию
  const {
    toggleErrorMessage,
  }: {
    togglePageActive: togglePageActiveType;
    toggleErrorMessage: toggleErrorMessageType;
  } = useAppContext();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!isSingningIn) {
      console.log("Отправлен запрос на авторизацию с логином: " + data.login);
      try {
        setIsSingningIn(true);
        await doSignInWithEmailAndPassword(data.login, data.password);
      } catch (err) {
        console.log("Ошибка авторизации: " + err);
        toggleErrorMessage(String(err));
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSingningIn(false);
    }, 2500);
  }, [isSingningIn]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.auth}>
        <input
          type="email"
          placeholder="Email"
          {...register("login", {
            required: true,
            maxLength: 20,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please Enter A Valid Email!",
            },
          })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true, maxLength: 20 })}
        />
        <NavAuth />
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
}
