import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from "./GerarResultado.module.css";
import Adivinhar from "./Adivinhar";
import Reiniciar from "./Reiniciar";


const GerarResultado = () => {
    const { win, guesses, guessesCount, password, handleGif } = useContext(SenhaContext)
    
    return (
        <>
            {!win && guesses.length < guessesCount
                    ? <Adivinhar gifOn={() => handleGif()} /> 
                    : win
                    ? (
                        <>
                            <p className={styles.texto}>Parabéns! Resposta correta!</p>
                            <Reiniciar />
                        </>
                    )
                    : (
                        <>
                            <p className={styles.texto}>Você perdeu...<br/>A senha é {password.toUpperCase()}</p>
                            <Reiniciar />
                        </>
                    )
            }
        </>
    )
}

export default GerarResultado;