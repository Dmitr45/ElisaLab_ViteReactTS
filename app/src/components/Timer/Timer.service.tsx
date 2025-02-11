'use client';
import { useState, useEffect } from "react";
import { useAppContext } from "@/context/ContextProvider";
import { NameAppType, themeActiveType, togglePageActiveType} from "@/context/types";
import Countdown from 'react-countdown'; //https://www.npmjs.com/package/react-countdown
import styles from "./styles.module.scss";
import { TimeDelLocal } from "@/services/deltaTimeLogic"

interface Props  {
  deltaMin: number
}

type StartTimer = {
  total?: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean 
  }



export function TimerService(props: Props){

const  {themeActive, togglePageActive} : {themeActive: themeActiveType,  NameApp: NameAppType, togglePageActive: togglePageActiveType} =  useAppContext();
const [ deltaTime, setDeltaTime ] = useState<number>(600000);
const [RenderJSX, setRenderJSX] = useState<JSX.Elemen>(<></>);

useEffect(()=>{
  console.log("Запуск TimerService на " + props.deltaMin/60000 + " .мин");
  setDeltaTime(props.deltaMin);
  setRenderJSX(<Countdown
            date={Date.now() + deltaTime}
            renderer={renderer}
          />);
}, [themeActive, deltaTime]);


function Render(): JSX.Element{
  return RenderJSX
}


// Random component
const Completionist = ():JSX.Element =>  {  return (<span>Время вышло!</span>) };

// Renderer callback with condition
const renderer = ({/*total, */ hours, minutes, seconds, completed }: StartTimer) => {
  if (completed) {
    togglePageActive(8);
    TimeDelLocal("simpleTimerStart")

    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <div className={styles.time}>{hours < 10 ? "0"+ String(hours) : String(hours)}:{minutes < 10 ? "0"+ String(minutes) : String(minutes) }:{seconds < 10 ? "0"+ String(seconds) : String(seconds)}</div>
  }
};


                                                  

return(
  <div className={styles.timerBox} >
    <div className={themeActive.timerBox}> 
        <div className={themeActive.time}>
        <Render/>
      </div>
    </div>
  </div>
)}