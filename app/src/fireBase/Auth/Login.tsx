import styles from "./styles.module.scss";
import { NavAuth } from "../../components/NavAuth";
import { useForm, SubmitHandler } from "react-hook-form";
import { doSignInWithEmailAndPassword } from "./auth";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/ContextProvider";
import { togglePageActiveType, toggleMessageType } from "../../context/types";

interface IFormInput {
  login: string;
  password: string;
}

export function LoginForm() {
  // useForm ============================================================================
  const { register, handleSubmit } = useForm<IFormInput>();
  const [isSingningIn, setIsSingningIn] = useState<boolean>(false); // отправлен ли запрос на авторизацию
  const {
    toggleMessage,
  }: {
    togglePageActive: togglePageActiveType;
    toggleMessage: toggleMessageType;
  } = useAppContext();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!isSingningIn) {
      try {
        setIsSingningIn(true);
        await doSignInWithEmailAndPassword(data.login, data.password);
        toggleMessage({
          type: "success",
          message: "You have successfully logged in " + data.login,
        });
      } catch (err) {
        console.log("Ошибка авторизации: " + err);
        toggleMessage({ type: "error", message: String(err) });
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
