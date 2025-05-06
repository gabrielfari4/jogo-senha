import { useContext } from "react";
import InputTentativa from "../InputTentativa";
import Modo from "../Modo";
import { SenhaContext } from "../../context/SenhaContext";
import Adivinhar from "../Adivinhar";

const Senha = () => {
    const {password, randomWord, randomNumber, win} = useContext(SenhaContext);

    return (
        <>
            <h1>Senha</h1>
            <Modo
                value={randomWord}
                checked={password === randomWord}
            >
                Palavra
            </Modo>
            <Modo
                value={randomNumber}
                checked={password === randomNumber}
            >
                Número
            </Modo>
            {password === randomWord ? (
                <p>Adivinhe a senha de 5 letras!</p>
            ) : (
                <p>Adivinhe a senha de 5 digitos!</p>
            )}
            <br />
            <InputTentativa />
            <br />
            {!win ? <Adivinhar/> : <p>Parabéns! Resposta correta!</p>}
        </>
    )
}

export default Senha;