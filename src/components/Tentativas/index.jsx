import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import Tentativa from "./Tentativa";


const Tentativas = () => {
    const { guesses } = useContext(SenhaContext)

    return (
        <div>
                <ul>
                    {guesses.map((element, index) => {
                        return (
                            <li key={index}>
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