import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from './Modo.module.css';

const Modo = ({ children, value, checked, variante }) => {
    const {setPassword} = useContext(SenhaContext);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <label className={styles.label}>
            <input 
                type="radio"
                value={value}
                checked={checked}
                onChange={handlePasswordChange}
                className={`${styles.input} ${styles[variante]}`}
            />
            <p className={styles.children}>{children}</p>
        </label>
    )
}

export default Modo;