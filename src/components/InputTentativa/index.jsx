import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";


const InputTentativa = () => {
    const {guess, setGuess} = useContext(SenhaContext);

    const handleChange = (event) => {
        setGuess(event.target.value)
        console.log(guess);
        
    }

    return (
        <input 
            type="text"
            value={guess.toUpperCase()}
            onChange={handleChange}
            maxLength={5}
        />
    )
}

export default InputTentativa;