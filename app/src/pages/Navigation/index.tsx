import style from './styles.module.scss';
import { useAppContext } from "@/context/ContextProvider";
import { togglePageActiveType, themeActiveType } from "../../context/types";
import { Link } from 'react-router-dom';


export function Navigation(){
    const  {themeActive, togglePageActive }:{togglePageActive:togglePageActiveType, themeActive:themeActiveType } =  useAppContext(); 
    // const Title:NameObjType = { "name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}


return (    
<div className={style.page}>
    <div className={style.logo}>
        <Link to="/authorization" style={{ textDecoration: 'none' }} onClick={()=>{togglePageActive(1)}} className={themeActive.podLogo}>Авторизация</Link> <br/>
        <Link to="/authorization" style={{ textDecoration: 'none' }} onClick={()=>{togglePageActive(2)}} className={themeActive.podLogo}>Регистрация</Link><br/>
        <Link to="/authorization" style={{ textDecoration: 'none' }} onClick={()=>{togglePageActive(3)}} className={themeActive.podLogo}>Профайл</Link><br/>
        <Link to="/about" style={{ textDecoration: 'none' }} className={themeActive.podLogo}>О приложении</Link><br/>
    </div>
    
</div>)} 