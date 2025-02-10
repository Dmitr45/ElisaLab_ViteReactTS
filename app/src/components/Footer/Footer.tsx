import { useAppContext } from "@/context/ContextProvider";
import { Link } from 'react-router-dom';
import styles from "./footer.module.scss"
import { themeActiveType, togglePageActiveType } from "@/context/types";




export function Footer(){
const  { themeActive,  togglePageActive}: {themeActive: themeActiveType, togglePageActive: togglePageActiveType } =  useAppContext(); // Переключение темы

return (
<div className={themeActive.section}>
    <div className={themeActive.footerSect}>
        <div className={styles.footer}>
        <Link to="/404"  className={styles.addMetod}> </Link>
        <Link to="/404" className={styles.editMetod}> </Link>
        <Link to="/simpleTimer" className={styles.startMetod}> </Link>
        <Link to="/404"  className={styles.history}> </Link>
        <Link to="/authorization" onClick={()=>{togglePageActive(1)}} className={styles.user} ></Link>
        </div>
    </div>
</div>
)}
