import { useContext } from "react";
import InputTentativa from "../InputTentativa";
import { SenhaContext } from "../../context/SenhaContext";
import './Senha.module.css';
import Gif from "../Gif";
import Legenda from "../Legenda";
import Enunciado from "../Enunciado";
import ModoDeJogo from "../ModoDeJogo";
import Tentativas from "../Tentativas";
import GerarResultado from "../GerarResultado";
// import words from '../../json/words.json';

const Senha = () => {
    const { setPassword, setArrayAnswer, win, guesses, guessesCount, gifOn, setGifOn } =
        useContext(SenhaContext);

    /* useEffect(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        let randomNumber = Math.floor(Math.random() * 99999).toString();
        if (randomNumber.length < 5) {
            randomNumber = randomNumber.padStart(5, "0");
        }
        setPassword(randomWord)
        // setArrayAnswer(password.split(""));
        console.log(randomNumber)
        console.log(randomWord);
    }, [])

    useEffect(() => {
        if (password) setArrayAnswer(password.split(""));
        
    }, [password]); */
    

    return (
        <>
            <h1>Senha</h1>
            <ModoDeJogo />
            <Enunciado />
            <br />
            {guesses.length < guessesCount && !win ? <InputTentativa gifOn={() => setGifOn(false)}/> : null}
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
