import { useAppContext } from "@/context/ContextProvider"
import { themeActiveType, pageActiveType } from "@/context/types";
import { LoginForm } from "@/components/AuthForms/Login";
import { RegistrationForm } from "@/components/AuthForms/Registration";
import style from './styles.module.scss';



export function Authorization(){
const  {themeActive, pageActive } : {themeActive: themeActiveType, pageActive: pageActiveType} =  useAppContext(); 



return (
<div className={themeActive.section}>
    <div className={style.page}>
        <div className={style.logo}>
        { pageActive === 2 ? <RegistrationForm/> : <LoginForm/>}
        </div>
    </div>
</div>
)
} 