import { SenhaContext } from './SenhaContext';
import { useEffect, useState } from 'react';
import words from '../json/words.json';


let randomWord = words[Math.floor(Math.random() * words.length)];
let randomNumber = Math.floor(Math.random() * 99999).toString();
if (randomNumber.length < 5) {
    randomNumber = randomNumber.padStart(5, "0");
}

export const SenhaProvider = ({children}) => {
    // const [password, setPassword] = useState();
    const [password, setPassword] = useState(randomWord);
    const [arrayAnswer, setArrayAnswer] = useState([]);
    const [guess, setGuess] = useState("");
    const [win, setWin] = useState(false);
    const [guesses, setGuesses] = useState([]);
    const [count, setCount] = useState(7);
    const [guessesCount, setGuessesCount] = useState(7)
    const [gifOn, setGifOn] = useState(false)
    
        const handleGif = () => {
            setGifOn(true)
        }

    useEffect(() => {
        setArrayAnswer(password.split(""));
        
    }, [password]);

    return (
        <SenhaContext.Provider value={{
            password,
            setPassword,
            arrayAnswer,
            setArrayAnswer,
            randomNumber,
            randomWord,
            guess,
            setGuess,
            win,
            setWin,
            guesses,
            setGuesses,
            count,
            setCount,
            guessesCount,
            setGuessesCount,
            gifOn,
            handleGif,
            setGifOn
        }}>
            {children}
        </SenhaContext.Provider>
    )
}