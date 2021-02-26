import { useContext } from 'react'
import {challangesContext} from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChalenges.module.css'
export function CompletedChallenges(){
    const {challengesCompleted} = useContext(challangesContext)
    return(
        <div className={styles.completedChallenge}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}