import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { NameAppType, NameObjType, themeActiveType, togglePageActiveType } from "../../context/types";


export function Start(){
    const  {themeActive, NameApp, togglePageActive } : {themeActive: themeActiveType, NameApp: NameAppType, togglePageActive: togglePageActiveType} =  useAppContext(); 
    const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan};
    togglePageActive(0);
return (    
<div className={style.page}>
    <div className={style.logo}>
        <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
        </div>
        <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div>
        </div>
    </div>
</div>)} 