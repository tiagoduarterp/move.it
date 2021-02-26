import {createContext, useState, ReactNode} from 'react';
import challenges from '../../challenges.json'
interface Challenge {
    type:'body' | 'eye';
    description:string;
    amount:number
}
interface ChallengeContextData {
    level: number,
    currentExperience:number,
    challengesCompleted:number,
    experienceToNextLevel:number,
    activeChallenge:Challenge,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void
}
interface ChallengesProviderProps {
    children: ReactNode;
}
export const challangesContext = createContext({} as ChallengeContextData );

export function ChallengesProvider({ children }:ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setCHallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level +1) * 4,2)

    function levelUp(){
        setLevel(level+1);
    }
    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengesIndex]
        setActiveChallenge(challenge)
    }
    function resetChallenge(){
        setActiveChallenge(null)
    }
    return (
        <challangesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            resetChallenge,
            experienceToNextLevel,
            activeChallenge
            }}
            >
            {children}
        </challangesContext.Provider>
    )
}