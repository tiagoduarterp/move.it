import { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'
import {challangesContext} from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

export function ChallengeBox(){
    const {activeChallenge,resetChallenge, completeCHallenge} = useContext(challangesContext)
    const { resetCountdown } = useContext(CountdownContext)
    const hasActiveChallenge = true
    function handleChallengeSucceeded(){
        completeCHallenge()
        resetCountdown()
    }
    function handleChallengeFailed(){
        resetChallenge()
        resetCountdown()
    }
    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>
                        Ganhe {activeChallenge.amount}xp
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>
                    <footer>
                        <button type="button" 
                        className={styles.challengeFaileButton}
                        onClick={handleChallengeFailed}
                        >Falhei</button>
                        <button type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        >Completei</button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um dasafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt=""/>
                    Avance de level completando desafios
                </p>
            </div>
            )}
            
        </div>
    )
} 