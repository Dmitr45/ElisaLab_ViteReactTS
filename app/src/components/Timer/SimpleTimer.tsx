'use client'
import style from './styles.module.scss';
import { useAppContext } from "@/context/ContextProvider";
import { deltaSimpleTimeType} from "@/context/types";
import { TimerService } from "@/components/Timer/Timer.service";
import { TimeLeft } from "@/services/deltaTimeLogic"



export function SimpleTimer(){
    // на сколько миллисек таймер: 
    const  {deltaSimpleTime}: {deltaSimpleTime: deltaSimpleTimeType} = useAppContext(); 
//     const [Render, setRender] = useState<JSX.Element>(<></>)
//     toggLocalStorageRefresh(Date.now());
//     useEffect(()=>{
//         setRender(<TimerService deltaMin={ Number(timeSimpleRender) } />)
//    }, [timeSimpleRender]);




return (    
<div className={style.simpleTimer}>
    <TimerService deltaMin={ TimeLeft( "simpleTimerStart", deltaSimpleTime*60000)} />
</div>)} 