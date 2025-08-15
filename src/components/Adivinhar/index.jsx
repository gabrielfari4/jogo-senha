import { useContext, useState } from "react"
import { SenhaContext } from "../../context/SenhaContext"

const Adivinhar = ({ gifOn }) => {
    const {win, setWin, guess, setGuess, setGuesses, arrayAnswer, setCount, password} = useContext(SenhaContext);
    const [alert, setAlert] = useState(null)

    const handleAnswer = () => {
        if (win) return;

        if (guess.length < 5 && isNaN(password)) {
            setAlert(`Digite mais ${5 - guess.length} letra(s)!`)
        } else if (guess.length < 5 && !isNaN(password)) {
            setAlert(`Digite mais ${5 - guess.length} número(s)!`)
        }
        if (guess.length !== 5) return;
        
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

        gifOn()
    }

    return (
        <>
            {<p style={{color: "yellow"}}>{alert}</p>}
            <button 
                onClick={handleAnswer}
                onBlur={() => setAlert(null)}
                >
                ADIVINHAR
            </button>
        </>
    )
}

export default Adivinhar;