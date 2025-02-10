


export function TimeRecLocal(localVar:string):void{ localStorage.setItem(localVar, Date.now().toString()); }  // Запись 
export function TimeDelLocal(localVar:string):void{ localStorage.removeItem(localVar); }                      // Удаление
export function TimeTrueLocal(localVar:string):boolean{ return Number(localStorage.getItem(localVar)) > 0  }  // Проверка наличия записи

export function DeltaTimeLocal( localVar:string ):number { // Сколько времени прошло с начала таймера до сейчас
            let returnTime: number = 0; // millisecond

            const NowTime  = Date.now();
            const LocalTime = Number(localStorage.getItem(localVar));

            if (LocalTime > 0 && LocalTime < NowTime) { returnTime = NowTime -  LocalTime} 
                else { returnTime = -1 }
console.log("DeltaTimeLocal, min: " + returnTime/60000  )
return returnTime // millisecond
}



export function TimeLeft( localVar: string, TimerInterval: number  ):number { // Остаток времени по таймеру в миллисекундах
            let returnTime: number = 0;
            
            const Delta: number = DeltaTimeLocal(localVar);
            if (Delta>0) { returnTime =  TimerInterval  - Delta};
            console.log("TimeLeft, min: " + returnTime/60000 )
            return returnTime >= 0 ? returnTime : -1 // Если таймер еще не прошол, выводим время в миллисек, иначе -1
}

