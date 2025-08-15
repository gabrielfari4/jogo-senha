import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from "./ModoDeJogo.module.css"
import Modo from "./Modo";

const ModoDeJogo = () => {
    const { guesses, randomWord, randomNumber, password } = useContext(SenhaContext)


    return (
            <>    
                {guesses.length >= 1 || (
                    <div className={styles.modo}>
                        <Modo 
                            value={randomWord} 
                            checked={isNaN(password)}                            
                        >
                            Palavra
                        </Modo>
                        <Modo
                            value={randomNumber}
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
