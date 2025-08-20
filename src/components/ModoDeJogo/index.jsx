import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from "./ModoDeJogo.module.css"
import Modo from "./Modo";
import words from '../../json/words.json';

const ModoDeJogo = () => {
    const { guesses, password } = useContext(SenhaContext)

    const palavra = () => {
        let randomWord = words[Math.floor(Math.random() * words.length)]
        return randomWord;
    }

    const numero = () => {
        let randomNumber = Math.floor(Math.random() * 99999).toString();
        if (randomNumber.length < 5) {
            randomNumber = randomNumber.padStart(5, "0");
        }
        return randomNumber;
    }


    return (
            <>    
                {guesses.length >= 1 || (
                    <div className={styles.modo}>
                        <Modo 
                            value={palavra()} 
                            checked={isNaN(password)}                            
                        >
                            Palavra
                        </Modo>
                        <Modo
                            value={numero()}
                            checked={!isNaN(password)}
                            variante="variante"
                        >
                            Número
                        </Modo>
                    </div>
                    )
                }
            </>
    )
}

export default ModoDeJogo;
