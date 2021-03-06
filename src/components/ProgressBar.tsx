import { useContext, useState } from 'react'
import styles from '../styles/components/ExperienceBar.module.css'
import {challangesContext} from '../contexts/ChallengesContext'
export function ExperienceBar() {
    const {currentExperience,experienceToNextLevel} = useContext(challangesContext)
    const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel)

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
            { percentToNextLevel > 0 &&
                <div style={{width :`${percentToNextLevel}%`}}>
                   

                    <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>
                        {currentExperience} xp
                    </span>
                </div>
                    }
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}