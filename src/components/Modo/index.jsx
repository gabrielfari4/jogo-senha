import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from './Modo.module.css';

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
                className={styles.input}
            />
            {children}
        </label>
    )
}

export default Modo;