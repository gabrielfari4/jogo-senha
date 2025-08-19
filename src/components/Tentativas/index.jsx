import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import Tentativa from "./Tentativa";
import styles from './Tentativas.module.css';


const Tentativas = () => {
    const { guesses } = useContext(SenhaContext)

    return (
        <div>
                <ul className={styles.lista}>
                    {guesses.map((element, index) => {
                        return (
                            <li key={index} className={styles.item}>
                                <Tentativa 
                                    arraySenha={element.answer}
                                    arrayTentativa={element.guess}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
}

export default Tentativas;