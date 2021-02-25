import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox(){
    const hasActiveChallenge = true
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um dasafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt=""/>
                    Avance de level completando desafios
                </p>
            </div>
        </div>
    )
} 