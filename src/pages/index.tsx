import {ExperienceBar} from '../components/ProgressBar'
import Head from 'next/head'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import Heade from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'

export default function Home() {
  return (
      <div className={styles.container}>
        <Heade>
          <title>Inicio | move.it</title>
        </Heade>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </div>
  )
}
