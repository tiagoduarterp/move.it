import {createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal';

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
    completeCHallenge: () => void,
    closeLevelModal: () => void
}
interface ChallengesProviderProps {
    children: ReactNode;
    level:number,
  currentExperience:number,
  challengesCompleted:number
}
// neverstoplearning
export const challangesContext = createContext({} as ChallengeContextData );

export function ChallengesProvider({ 
    children,
    ...rest
    }:ChallengesProviderProps){
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setCHallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level +1) * 4,2)
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

    useEffect(()=>{
        Notification.requestPermission()
    },[])
    useEffect(()=>{
       Cookies.set("level", String(level))
       Cookies.set("currentExperience", String(currentExperience))
       Cookies.set("challengesCompleted", String(challengesCompleted))

    },[level, currentExperience,challengesCompleted])

    function levelUp(){
        setLevel(level+1);
        setIsLevelModalOpen(true)
    }
    function closeLevelModal (){
        setIsLevelModalOpen(false)
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
            completeCHallenge,
            closeLevelModal
            }}
            >
            {children}
           {isLevelModalOpen && <LevelUpModal /> } 
        </challangesContext.Provider>
    )
}