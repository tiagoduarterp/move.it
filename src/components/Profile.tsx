import styles from '../styles/components/Profile.module.css'
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="user-male.png" alt="alt teste"/>
            <div>
                <strong>Tiago Duarte</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Leve 1
                </p>
            </div>
        </div>
    )
}