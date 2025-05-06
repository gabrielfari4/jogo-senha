import { useContext } from "react"
import { SenhaContext } from "../../context/SenhaContext"

const Adivinhar = () => {
    const {win, setWin, guess, setGuess, guesses, setGuesses, arrayAnswer, setCount, password} = useContext(SenhaContext);

    const handleAnswer = () => {
        if (win) return;
        if (guess.length !== 5) return;
        if (guesses.length === 7) return;

        const currentGuess = guess.toLowerCase().split('');

        setGuesses((oldGuess) => {
            let newGuess = {
                answer: arrayAnswer,
                guess: currentGuess
            }
            return (oldGuess = [...oldGuess, newGuess]);
        });

        setCount((prevCount) => prevCount - 1);

        if (password === guess.toLowerCase()) {
            return setWin(true)
        }

        setGuess("")
    }

    return (
        <button 
            onClick={handleAnswer}
        >
            ADIVINHAR
        </button>
    )
}

export default Adivinhar;