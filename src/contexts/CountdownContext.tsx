import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import { challangesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes:number,
    seconds:number,
    hasFinished:boolean,
    isActive:boolean,
    startCountdown: () => void,
    resetCountdown: () => void
}
interface CountdownProviderProps {
    children: ReactNode;
}
let countdownTimeout: NodeJS.Timeout
let cicle = 0.1

export const CountdownContext = createContext({} as CountdownContextData)
export function CountdownProvider({ children }:CountdownProviderProps){
    const {startNewChallenge} = useContext(challangesContext)
    const [time, setTime] = useState(cicle * 60);
    const [isActive, setIsActive] = useState(false)
    const minutes = Math.floor(time / 60) ;
    const seconds = time % 60
    const [hasFinished, setHasFinished] = useState(false)
    function startCountdown(){
        setIsActive(true)
    }
    function resetCountdown(){
        console.log('reset')
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(cicle * 60)
        setHasFinished(false)
    }
    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1)
            },1000)
        }else if(isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}
        >
            {children}
        </CountdownContext.Provider>
    )
}