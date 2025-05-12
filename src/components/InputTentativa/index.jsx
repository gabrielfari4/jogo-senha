import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from './InputTentativa.module.css';


const InputTentativa = () => {
    const {guess, setGuess, password } = useContext(SenhaContext);

    const handleChange = (event) => {
        setGuess(event.target.value)
        console.log(guess);
    }

    const keyTest = (e) => {
        if (isNaN(password) && !/[a-zA-Z]/.test(e.key) && e.key !== 'Backspace') e.preventDefault()
        if (!isNaN(password) && !/[0-9]/.test(e.key) && e.key !== 'Backspace') e.preventDefault()
    }

    return (
        <input 
            type="text"
            value={guess.toUpperCase()}
            onChange={handleChange}
            maxLength={5}
            className={styles.input}
            placeholder={isNaN(password) ? 'Digite uma palavra de 5 letras...' : 'Digite um número de 5 digitos...'}
            onKeyDown={keyTest}
        />
    )
}

export default InputTentativa;