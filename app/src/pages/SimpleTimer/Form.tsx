import style from './styles.module.scss';
import { InputRangeTime } from '../../components/Timer/InputRangeTime';
import { StartButton } from '../../components/Timer/StartButton';


export function FormSimpleTimer(){


return (    
<div className={style.page}>
    {/* <div className={style.logo}>
        <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
        </div>
        <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div>
        </div>
    </div> */}
    < InputRangeTime />
    < StartButton />
</div>)} 