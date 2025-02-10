'use client'
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { NameAppType, NameObjType, apiURLType, themeActiveType} from "../../context/types";
import { RequestPOSTApi } from "../../logics/FetchGetPost"


export function Test(){
    const  {themeActive, NameApp,  apiURL} : {themeActive: themeActiveType, NameApp: NameAppType, apiURL: apiURLType} =  useAppContext(); 
    const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan};

return (    
<div className={style.page}>
    <div className={style.logo}>
        <div className={themeActive.logo} >T<span>est</span>
        </div>
        <button onClick={()=>{RequestPOSTApi(apiURL, "upperText")}}>---Request---</button>
    </div>
</div>)} 