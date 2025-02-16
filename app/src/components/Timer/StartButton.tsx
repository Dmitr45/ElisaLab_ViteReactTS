'use client'
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType, togglePageActiveType} from "../../context/types";
import { TimeRecLocal } from "../../logics/deltaTimeLogic"

export function StartButton(){
    const  {themeActive, togglePageActive} : {themeActive: themeActiveType, togglePageActive: togglePageActiveType} =  useAppContext(); 
return (    
<div className={style.startButton} onClick={()=>{ TimeRecLocal("simpleTimerStart"); togglePageActive(7)   }}>
    <div className={themeActive.startButton}>
            Start
    </div>
</div>)} 