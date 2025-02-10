'use client'
import { useAppContext } from "@/context/ContextProvider"
import { NameAppType, NameObjType, themeActiveType, pageActiveType } from "@/context/types";
import { LoginForm } from "@/components/AuthForms/Login";
import { RegistrationForm } from "@/components/AuthForms/Registration";
import style from './styles.module.scss';



export function Authorization(){
const  {themeActive, NameApp, pageActive } : {themeActive: themeActiveType, NameApp: NameAppType, pageActive: pageActiveType} =  useAppContext(); 

const Title:NameObjType = {  "name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}




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