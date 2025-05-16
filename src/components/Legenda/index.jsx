import { useContext } from 'react';
import styles from './Legenda.module.css';
import { SenhaContext } from '../../context/SenhaContext';

const Legenda = () => {
    const {password} = useContext(SenhaContext);


    return (
        <section className={styles.container}>
            <div>
            <span className={styles.quadrado}>
            </span>
                <p className={styles.texto}>{isNaN(password) ? 'letra errada' : 'número errado'}</p>
            </div>
            <div>
                <span className={styles.quadrado}>
                </span>
                    <p className={styles.texto}>{isNaN(password) ? 'letra certa, posição errada' : 'número certo, posição errada'}</p>
            </div>
            <div>
                <span className={styles.quadrado}>
                </span>
                    <p className={styles.texto}>{isNaN(password) ? 'letra certa, posição certa' : 'número certo, posição certa'}</p>
            </div>
        </section>
    )
}

export default Legenda;