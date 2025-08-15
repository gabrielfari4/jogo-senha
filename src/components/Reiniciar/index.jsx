import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";


const Reiniciar = () => {
    const { setArrayAnswer, setGuess, setWin, setGuesses, setCount, setGuessesCount } = useContext(SenhaContext)

    const playAgain = () => {
        // setArrayAnswer([])
        setGuess("")
        setWin(false)
        setGuesses([])
        setCount(7)
        setGuessesCount(7)
    }

    return (
        <button onClick={() => playAgain()}>JOGAR NOVAMENTE</button>
    )
}
export default Reiniciar;