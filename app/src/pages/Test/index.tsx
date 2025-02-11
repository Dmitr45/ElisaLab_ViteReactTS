import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { themeActiveType} from "../../context/types";
// import { RequestPOSTApi } from "../../logics/FetchGetPost"


export function Test(){
    const  {themeActive} : {themeActive: themeActiveType} =  useAppContext(); 

return (    
<div className={style.page}>
    <div className={style.logo}>
        <div className={themeActive.logo} >T<span>est</span>
        </div>
        {/* <button onClick={()=>{RequestPOSTApi(apiURL, "upperText")}}>---Request---</button> */}
    </div>
</div>)} 