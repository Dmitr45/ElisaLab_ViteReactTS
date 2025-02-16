import { useAppContext } from "../../context/ContextProvider"
import { pagesType, themeActiveType } from '../../context/types'
// import { Authorization } from "../Loginer/index";
// import { Registration } from "../Registration/index";
import { Start } from "../Start/index";
// import { Navigation } from "../Navigation/index";
// import { Profile } from "../Profile/index";
// import { SimpleTimerPage } from "../SimpleTimer/index";
// import { FormSimpleTimer } from "../SimpleTimer/Form";
// import { Alarm } from "../AlarmFinish/index"
// import { TimeTrueLocal } from "../../logics/deltaTimeLogic";
// import { Test } from  "../Test/index";





export function Routing(){
const  {themeActive, pageActive}:{themeActive:  themeActiveType, pageActive:number} =  useAppContext(); 
const pagesArr:pagesType= [
                            Start, // 0
                            // Authorization, // 1
                            // Registration, // 2
                            // Navigation,  // 3
                            // Profile,   // 4
                            // TimeTrueLocal("simpleTimerStart") ?  SimpleTimerPage : FormSimpleTimer, // 5
                            // FormSimpleTimer, // 6
                            // SimpleTimerPage, // 7
                            // Alarm, // 8
                            // Test // 9
                        ];

return (
<div className={themeActive.section}>
            {pagesArr[pageActive]()}
</div>
)} 