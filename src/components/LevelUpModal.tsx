import { useContext } from 'react'
import { challangesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'
export function LevelUpModal(){
    const {level, closeLevelModal} = useContext(challangesContext)
    return(
        <div className={styles.overlay}>

            <div className={styles.container}>
                <header>
                    {level}
                </header>
                <strong>Parabens</strong>
                <p>Voce alcançou um novo level.</p>
                <button type="button" onClick={closeLevelModal}>
                    <img src="/icons/close.svg" alt="Fechar"/>
                </button>
            </div>
        </div>
    )
}