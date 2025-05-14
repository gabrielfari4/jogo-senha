import { useContext, useState } from "react";
import InputTentativa from "../InputTentativa";
import Modo from "../Modo";
import { SenhaContext } from "../../context/SenhaContext";
import Adivinhar from "../Adivinhar";
import Tentativas from "../Tentativas";
import styles from './Senha.module.css';
import Gif from "../Gif";

const Senha = () => {
    const { password, randomWord, randomNumber, win, count, guesses } =
        useContext(SenhaContext);
    const [gifOn, setGifOn] = useState(false)

    const handleGif = () => {
        setGifOn(true)
        console.log(guesses.length);
        console.log(win);
        console.log(gifOn);
        
    }

    return (
        <>
            <h1>Senha</h1>
            {guesses.length >= 1 || (
                <div className={styles.modo}>
                    <Modo 
                        value={randomWord} 
                        checked={password === randomWord}>
                        Palavra
                    </Modo>
                    <Modo
                        value={randomNumber}
                        checked={password === randomNumber}
                        variante="variante"
                    >
                        Número
                    </Modo>
                </div>
            )}
            {password === randomWord ? (
                <p className={styles.texto}>Adivinhe a senha de 5 letras!</p>
            ) : (
                <p className={styles.texto}>Adivinhe a senha de 5 digitos!</p>
            )}
            {count > 0 && !win ? (
                <p className={styles.texto}>Você tem {count} chances.</p>
            ) : !win ? (
                <p className={styles.texto}>Acabaram suas chances =(</p>
            ) : null}
            <br />
            {guesses.length < 7 && !win ? <InputTentativa gifOn={() => setGifOn(false)}/> : null}
            
                {guesses.length === 7 && !win && gifOn ? <Gif status='derrota'/> : null}
                {(guesses.length >= 1 && guesses.length < 7) && !win && gifOn ? <Gif status='errou'/> : null}
                {win && <Gif status='vitoria'/>}
            
            <br />
            {!win && guesses.length < 7
                ? <Adivinhar gifOn={handleGif} /> 
                : win
                ? <p className={styles.texto}>Parabéns! Resposta correta!</p>
                : <p className={styles.texto}>Você perdeu...<br/>A senha é {password.toUpperCase()}</p>
            }
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
