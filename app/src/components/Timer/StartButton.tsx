import style from './styles.module.scss';
import { useEffect } from 'react';
import { useAppContext } from "@/context/ContextProvider";
import { themeActiveType, togglePageActiveType} from "@/context/types";
import { TimeRecLocal } from "@/services/deltaTimeLogic"




export function StartButton(){
    const  {themeActive, togglePageActive} : {themeActive: themeActiveType, togglePageActive: togglePageActiveType} =  useAppContext(); 

useEffect (()=>{
    //console.log("");
    //setTimerRender(<TimerService deltaMin={ Number(timeSimpleRender) } />)
}, []);



return (    
<div className={style.startButton} onClick={()=>{ TimeRecLocal("simpleTimerStart"); togglePageActive(7)   }}>
    <div className={themeActive.startButton}>
            Start
    </div>
</div>)} 