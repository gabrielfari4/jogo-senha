import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";

const Modo = ({ children, value, checked }) => {
    const {setPassword} = useContext(SenhaContext);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <label>
            <input 
                type="radio"
                value={value}
                checked={checked}
                onChange={handlePasswordChange}
            />
            {children}
        </label>
    )
}

export default Modo;