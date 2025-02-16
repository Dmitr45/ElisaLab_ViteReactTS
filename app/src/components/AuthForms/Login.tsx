import styles from "./styles.module.scss";
import { NavAuth } from "../../components/NavAuth";
import { useForm, SubmitHandler } from "react-hook-form";



interface IFormInput {
    login: string
    password: string
}



export function LoginForm(){



// useForm ============================================================================
const { register, handleSubmit } = useForm<IFormInput>()
const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)






return(
<form  onSubmit={handleSubmit(onSubmit)}>    
    <div className={styles.auth}>
    <input type="text" placeholder="login" {...register("login", { required: true, maxLength: 20})} />
    <input type="password" placeholder="password" {...register("password", { required: true, maxLength: 20})} />
        <NavAuth/>
    <button type="submit">Sign in</button>
    </div> 
</form>
)}