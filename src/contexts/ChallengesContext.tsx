import {createContext, useState, ReactNode, useEffect} from 'react';
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
    resetChallenge: () => void,
    completeCHallenge: () => void
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

    useEffect(()=>{
        Notification.requestPermission()
    },[])

    function levelUp(){
        setLevel(level+1);
    }
    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengesIndex]
        setActiveChallenge(challenge)
        new Audio('/notification.mp3').play()
        if(Notification.permission === 'granted' ){
            new Notification('Novo desafio',{
                body: `Valendo ${challenge.amount} xp`
            })
        }
    }
    function resetChallenge(){
        setActiveChallenge(null)
    }
    function completeCHallenge(){
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge
        let finalExperience = currentExperience + amount
        if(finalExperience > experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setActiveChallenge(null)
        setCurrentExperience(finalExperience)
        setCHallengesCompleted(challengesCompleted + 1)
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
            activeChallenge,
            completeCHallenge
            }}
            >
            {children}
        </challangesContext.Provider>
    )
}