import { useContext } from "react";
import { SenhaContext } from "../../context/SenhaContext";
import styles from "./Enunciado.module.css"

const Enunciado = () => {
    const { password, count, randomWord, win } = useContext(SenhaContext)

    return (
        <>
            {password === randomWord ? (
                            <p className={styles.texto}>Adivinhe a senha de 5 letras!</p>
                        ) : (
                            <p className={styles.texto}>Adivinhe a senha de 5 dígitos!</p>
                        )}
                        {count > 0 && !win ? (
                            <p className={styles.texto}>Você tem {count} chances.</p>
                        ) : !win ? (
                            <p className={styles.texto}>Acabaram suas chances =(</p>
                        ) : null}
        </>
    )
}

export default Enunciado;