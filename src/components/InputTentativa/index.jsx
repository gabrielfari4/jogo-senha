import { useContext, useState } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from './InputTentativa.module.css';


const InputTentativa = () => {
    const {guess, setGuess, password } = useContext(SenhaContext);
    const [alerta, setAlerta] = useState(null);

    const handleChange = (event) => {
        setGuess(event.target.value)
        console.log(guess);
    }

    const keyTest = (e) => {
        setAlerta(null)
        if (isNaN(password) && !/[a-zA-Z]/.test(e.key) && e.key !== 'Backspace') {
            e.preventDefault()
            setAlerta('Digite uma letra!')

        }
        if (!isNaN(password) && !/[0-9]/.test(e.key) && e.key !== 'Backspace') {
            e.preventDefault()
            setAlerta('Digite um número!')
        }
    }

    return (
        <>
            <input 
                type="text"
                // TODO: elevar o estado para o value length < 5 no submit
                value={guess.toUpperCase()}
                onChange={handleChange}
                maxLength={5}
                className={styles.input}
                placeholder={isNaN(password) ? 'Digite uma palavra de 5 letras...' : 'Digite um número de 5 digitos...'}
                onKeyDown={keyTest}
            />
            <br />
            <p className={styles.texto}>{alerta}</p>
        </>
    )
}

export default InputTentativa;