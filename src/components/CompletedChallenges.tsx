import styles from '../styles/components/CompletedChalenges.module.css'
export function CompletedChallenges(){
    return(
        <div className={styles.completedChallenge}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}