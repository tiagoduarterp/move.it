import { useState, useEffect, useContext } from 'react'
import { challangesContext } from '../contexts/ChallengesContext'
import {CountdownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/Countdown.module.css'

// #jornadainfinita

export function Countdown(){
    const { minutes,
            hasFinished,
            isActive,
            resetCountdown,
            seconds,
            startCountdown } = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    console.log('is active aqui no de', isActive)
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