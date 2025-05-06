import styles from '../Tentativas/Tentativas.module.css';

const Tentativas = ({ arraySenha, arrayTentativa}) => {
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
        if (arraySenha.includes(letra)) {
            return (
                <span 
                    key={index}
                    className={`${styles.letra} ${styles.valida}`}
                >
                    {letra.toUpperCase()}
                </span>
            );
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

export default Tentativas;