import { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'
import {challangesContext} from '../contexts/ChallengesContext'

export function ChallengeBox(){
    const {activeChallenge,resetChallenge} = useContext(challangesContext)
    const hasActiveChallenge = true
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
                        onClick={resetChallenge}
                        >Falhei</button>
                        <button type="button"
                        className={styles.challengeSucceededButton}
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