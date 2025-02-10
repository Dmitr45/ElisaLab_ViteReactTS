import styles from "./styles.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppContext } from "@/context/ContextProvider";
import { togglePageActiveType } from '@/context/types';

interface IFormInput{
    login: string,
    email: string,
    password: string,

}


export function RegistrationForm(){
    const  {togglePageActive } : {togglePageActive: togglePageActiveType} =  useAppContext(); 
    togglePageActive(2);
return(
    <div className={styles.auth}>
        <input placeholder="Login"></input>
        <input placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Repeat password"></input>
        <button>Sign up</button>
    </div>
)}