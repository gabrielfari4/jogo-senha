import { useContext } from "react";
import InputTentativa from "../InputTentativa";
import { SenhaContext } from "../../context/SenhaContext";
import styles from './Senha.module.css';
import Gif from "../Gif";
import Legenda from "../Legenda";
import Enunciado from "../Enunciado";
import ModoDeJogo from "../ModoDeJogo";
import Tentativas from "../Tentativas";
import GerarResultado from "../GerarResultado";

const Senha = () => {
    const { password, win, guesses, guessesCount, gifOn, setGifOn } = useContext(SenhaContext);  

    return (
        <>
            <h1 className={styles.titulo}>Senha</h1>
            <ModoDeJogo />
            <Enunciado />
            <br />
            {password && guesses.length < guessesCount && !win ? <InputTentativa gifOn={() => setGifOn(false)}/> : null}
            {guesses.length === guessesCount && !win && gifOn ? <Gif status='derrota'/> : null}
            {(guesses.length >= 1 && guesses.length < guessesCount) && !win && gifOn ? <Gif status='errou'/> : null}
            {win && <Gif status='vitoria'/>}
            <br />
            <GerarResultado />
            {guesses.length >= 1 && <Legenda />}
            <Tentativas />
        </>
    );
};

export default Senha;
