import style from './styles.module.scss';
import { SimpleTimer } from "../../components/Timer/SimpleTimer";
import { StopButton } from '../../components/Timer/StopButton';



export function SimpleTimerPage(){

   


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