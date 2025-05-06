import { useContext } from "react";
import InputTentativa from "../InputTentativa";
import Modo from "../Modo";
import { SenhaContext } from "../../context/SenhaContext";
import Adivinhar from "../Adivinhar";
import Tentativas from "../Tentativas";

const Senha = () => {
    const { password, randomWord, randomNumber, win, count, guesses } =
        useContext(SenhaContext);

    return (
        <>
            <h1>Senha</h1>
            {guesses.length >= 1 || (
                <>
                    <Modo 
                        value={randomWord} 
                        checked={password === randomWord}>
                        Palavra
                    </Modo>
                    <Modo
                        value={randomNumber}
                        checked={password === randomNumber}
                    >
                        Número
                    </Modo>
                </>
            )}
            {password === randomWord ? (
                <p>Adivinhe a senha de 5 letras!</p>
            ) : (
                <p>Adivinhe a senha de 5 digitos!</p>
            )}
            {count > 0 && !win ? (
                <p>Você tem {count} chances.</p>
            ) : !win ? (
                <p>Acabaram suas chances =(</p>
            ) : null}
            <br />
            <InputTentativa />
            <br />
            {!win ? <Adivinhar /> : <p>Parabéns! Resposta correta!</p>}
            <div>
                <ul>
                    {guesses.map((element, index) => {
                        return (
                            <li key={index}>
                                <Tentativas 
                                    arraySenha={element.answer}
                                    arrayTentativa={element.guess}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Senha;
