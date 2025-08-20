import { useContext } from "react";
import { SenhaContext } from "../../../context/SenhaContext";
import words from '../../../json/words.json';
import styles from './Reiniciar.module.css';

const Reiniciar = () => {
    const { setGuess, setWin, setGuesses, setCount, setGuessesCount, setPassword } = useContext(SenhaContext)

    const palavra = () => {
        let randomWord = words[Math.floor(Math.random() * words.length)]
        return randomWord;
    }

    const playAgain = () => {
        setPassword(palavra())
        setGuess("")
        setWin(false)
        setGuesses([])
        setCount(7)
        setGuessesCount(7)
    }

    return (
        <button onClick={() => playAgain()} className={styles.reiniciar}>JOGAR NOVAMENTE</button>
    )
}
export default Reiniciar;