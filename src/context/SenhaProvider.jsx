import { SenhaContext } from './SenhaContext';
import { useEffect, useState } from 'react';
import words from '../json/words.json';

const randomWord = words[Math.floor(Math.random() * words.length)];
let randomNumber = Math.floor(Math.random() * 99999).toString();
if (randomNumber.length < 5) {
    randomNumber = randomNumber.padStart(5, "0");
}

export const SenhaProvider = ({children}) => {
    const [password, setPassword] = useState(randomWord);
    const [arrayAnswer, setArrayAnswer] = useState([]);
    const [guess, setGuess] = useState("");
    const [win, setWin] = useState(false);
    const [guesses, setGuesses] = useState([]);
    const [count, setCount] = useState(7);

    useEffect(() => {
        setArrayAnswer(password.split(""));
        console.log(randomWord);
        console.log(randomNumber);
        console.log(arrayAnswer);
        
    }, [password]);

    return (
        <SenhaContext.Provider value={{
            password,
            setPassword,
            arrayAnswer,
            randomNumber,
            randomWord,
            guess,
            setGuess,
            win,
            setWin,
            guesses,
            setGuesses,
            count,
            setCount
        }}>
            {children}
        </SenhaContext.Provider>
    )
}