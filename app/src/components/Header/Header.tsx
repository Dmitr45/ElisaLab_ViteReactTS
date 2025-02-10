import { useAppContext } from "@/context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./header.module.scss"
import { NameAppType, NameObjType, themeActiveType, pageActiveType } from "@/context/types";
import { Link } from "react-router-dom";


export function Header(){
const  {toggleDarkThemeContext, darkThemeContext, themeActive, NameApp, pageActive,  togglePageActive }:{
    themeActive:{readonly [key: string]: string},
    pageActive: pageActiveType, 
    toggleDarkThemeContext: {(bool: boolean): string}, 
    darkThemeContext: boolean,
    togglePageActive:{(page: number):string},
    NameApp: NameAppType
    }   =  useAppContext(); // Переключение темы

    const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan};

const [onchegeTheme, setOncchengeTheme] = useState<boolean>(darkThemeContext);

useEffect(()=>{
toggleDarkThemeContext(onchegeTheme);
},[ onchegeTheme, darkThemeContext]);


return (
<div className={themeActive.section}>
        <div className={styles.header}>
                {pageActive === 0 ? 
                    <div className={styles.theme}  onClick={()=> {setOncchengeTheme(!onchegeTheme);}}>
                        <p>{onchegeTheme? " Light mode " :  " Darck mode "}</p>
                    </div> 
                :
                <Link to="/" className={styles.logo}  style={{ textDecoration: 'none' }}>
                    <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
                    </div>
                </Link>
                }
            <Link to="/navigation" className={themeActive.burger}>
                <div className={styles.burg}>
                </div>
            </Link>
        </div>
</div>
)}
