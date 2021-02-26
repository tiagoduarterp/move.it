import { useContext } from 'react'
import { challangesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
export function Profile() {
    const { level } = useContext(challangesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="user-male.png" alt="alt teste"/>
            <div>
                <strong>Tiago Duarte</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Leve {level}
                </p>
            </div>
        </div>
    )
}