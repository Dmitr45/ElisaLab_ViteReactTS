'use client'
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { localStorageRefreshType, NameAppType, NameObjType, themeActiveType, togglePageActiveType } from "../../context/types";
import { SimpleTimer } from "../../components/Timer/SimpleTimer";
import { StopButton } from '../../components/Timer/StopButton';



export function SimpleTimerPage(){

    const  {themeActive, NameApp} : {themeActive: themeActiveType, NameApp: NameAppType, localStorageRefresh: localStorageRefreshType, togglePageActive: togglePageActiveType} =  useAppContext(); 
    const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan};

return (    
<div className={style.page}>
    {/* <div className={style.logo}>
        <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
        </div>
        <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div>
        </div>
    </div> */}
        <SimpleTimer />
        <StopButton />
</div>)} 