import styles from "./styles.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "./auth";
import { useState, useEffect } from "react";
import { useAppContext } from "../../context/ContextProvider";
import { togglePageActiveType, toggleMessageType } from "../../context/types";

interface IFormInput {
  login: string;
  password: string;
  password2: string;
}

export function RegistrationForm() {
  // useForm ============================================================================
  const { register, handleSubmit } = useForm<IFormInput>();
  const [isSingningIn, setIsSingningIn] = useState<boolean>(false); // отправлен ли запрос на авторизацию
  const {
    togglePageActive,
    toggleMessage,
  }: {
    togglePageActive: togglePageActiveType;
    toggleMessage: toggleMessageType;
  } = useAppContext();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.password2) {
      toggleMessage({
        type: "error",
        message: String("Passwords don't match"),
      });
    }
    if (!isSingningIn && data.password === data.password2) {
      setIsSingningIn(true);
      try {
        await doCreateUserWithEmailAndPassword(data.login, data.password);
        await doSignInWithEmailAndPassword(data.login, data.password);
        togglePageActive(4);
        toggleMessage({
          type: "success",
          message:
            "Registration: You have successfully logged in " + data.login,
        });
      } catch (err) {
        console.log("Registration: " + err);
        toggleMessage({
          type: "error",
          message: String(err),
        });
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
        <input
          type="password"
          placeholder="Repeat password"
          {...register("password2", { required: true, maxLength: 20 })}
        />
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
}
