'use client'
import style from './styles.module.scss';
import { useAppContext } from "@/context/ContextProvider";
import { themeActiveType, togglePageActiveType} from "@/context/types";
import { TimeDelLocal } from "@/services/deltaTimeLogic"



export function StopButton(){
    const  {themeActive, togglePageActive} : {themeActive: themeActiveType, togglePageActive: togglePageActiveType} =  useAppContext(); 

return (    
<div className={style.stopButton} onClick={()=>{  TimeDelLocal("simpleTimerStart"); togglePageActive(6)}}>
    <div className={themeActive.startButton}>
            Stop
    </div>
</div>)} 