'use client'
import { useAppContext } from "../../context/ContextProvider"
import { themeActiveType } from "../../context/types";
import { LoginForm } from "../../components/AuthForms/Login";
import style from './styles.module.scss';



export function Authorization(){
const  {themeActive} : {themeActive: themeActiveType} =  useAppContext(); 


return (
<div className={themeActive.section}>
    <div className={style.page}>
        <div className={style.logo}>
            {/* <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div> */}
            <LoginForm/> 
        </div>
    </div>
</div>
)
} 