import { useEffect, useState } from 'react';
import styles from './Tentativa.module.css';

const Tentativa = ({ arraySenha, arrayTentativa}) => {
    const [letrasSenha, setLetrasSenha] = useState({})
    const [letrasCertas, setLetrasCertas] = useState({})

    const letrasSenhaTemp = {}

    arraySenha.forEach((letra) => {
        if (letrasSenhaTemp[letra]) {
            letrasSenhaTemp[letra] = letrasSenhaTemp[letra] + 1;
        } else {
            letrasSenhaTemp[letra] = 1
        }
    })

    const letrasCertasTemp = {}

    arrayTentativa.forEach((letra, index) => {
        if (arraySenha[index] === letra) {
            letrasCertasTemp[letra] = (letrasCertasTemp[letra] || 0) + 1;
        }
    })

    useEffect(() => {
        setLetrasSenha(letrasSenhaTemp)
        setLetrasCertas(letrasCertasTemp)
    }, [])
    

    return arrayTentativa.map((letra, index) => {
        const filtro = arraySenha[index] === letra;

        if (arraySenha.includes(letra) && filtro) {
            return (
                <span 
                key={index}
                className={`${styles.letra} ${styles.correta}`}
                >
                    {letra.toUpperCase()}
                </span>
            );
        }
        if (
            (arraySenha.includes(letra) && (!letrasCertas[letra] || letrasCertas[letra] < letrasSenha[letra]))
        ) {
            return (
                <span 
                    key={index}
                    className={`${styles.letra} ${styles.valida}`}
                >
                    {letra.toUpperCase()}
                </span>
            );
        } else if (letrasCertas[letra] === letrasSenha[letra]) {
            return (
                <span 
                    key={index}
                    className={styles.letra}
                >
                    {letra.toUpperCase()}
                </span>
            )
        } else {
            return (
                <span 
                    key={index}
                    className={styles.letra}
                >
                    {letra.toUpperCase()}
                </span>
            )
        }
    })
}

export default Tentativa;