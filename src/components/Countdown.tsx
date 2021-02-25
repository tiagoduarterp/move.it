import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

// #jornadainfinita
let countdownTimeout: NodeJS.Timeout
let cicle = 0.1
export function Countdown(){
    const [time, setTime] = useState(cicle * 60);
    const [isActive, setIsActive] = useState(false)
    const minutes = Math.floor(time / 60) ;
    const seconds = time % 60
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    const [hasFinished, setHasFinished] = useState(false)

    function startCountdown(){
        setIsActive(true)
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(cicle * 60)
    }
    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1)
            },1000)
        }else if(isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])
    return (
        <div>
        <div className={styles.countdowContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div> 
        {hasFinished ? (
             <button 
             disabled
             className={styles.countdownButton}
             >
                Ciclo encerrado
             </button>
        ):(
            <>
            {isActive ? (
                 <button 
                 type="button" 
                 className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                 onClick={resetCountdown}
                 >
                    Abandonar ciclo
                 </button>
                ):(
                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                    >
                       Iniciar
                    </button>
                )} 
            </>
        )}
        
       
       
        </div>
    )
}