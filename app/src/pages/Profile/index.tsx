import style from './styles.module.scss';
import { useAppContext } from "@/context/ContextProvider";
import { togglePageActiveType } from '@/context/types';


export function Profile(){
    const  {togglePageActive } : {togglePageActive: togglePageActiveType} =  useAppContext(); 
    togglePageActive(3);

return (    
<div className={style.page}>
Ваш личный кабинет
</div>)} 