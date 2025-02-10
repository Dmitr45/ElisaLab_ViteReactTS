'use client'
import style from './styles.module.scss';
import { useState, useEffect } from 'react';
import { useAppContext } from "@/context/ContextProvider";
import { deltaSimpleTimeType, themeActiveType, timeSimpleRenderType, toggleDeltaSimpleTimeType  } from "@/context/types";




export function InputRangeTime(){
const  {themeActive, deltaSimpleTime, toggleDeltaSimpleTime} : {themeActive: themeActiveType, deltaSimpleTime: deltaSimpleTimeType, toggleDeltaSimpleTime: toggleDeltaSimpleTimeType} =  useAppContext(); 

return (    
<div className={style.inputRangeTime}>
    <div className={themeActive.inputRange}>
    {/* @ts-expect-error */}
        <input type="range" min="1" max="60" step="1" value={deltaSimpleTime} onChange={(e)=>{toggleDeltaSimpleTime(e.target.value)}} />
        <br/>
    {/* @ts-expect-error */}        
        <input type="number" name="selectTime" min="1" value={deltaSimpleTime} onChange={(e)=>{toggleDeltaSimpleTime(e.target.value)}}   required></input>
    </div>
</div>)} 