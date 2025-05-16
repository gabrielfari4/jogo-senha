import styles from './Legenda.module.css';

const Legenda = () => {
    return (
        <section className={styles.container}>
            <div className={styles.quadrado}>
                <p className={styles.texto}>letra/número errada(o)</p>
            </div>
            <div className={styles.quadrado}>
                <p className={styles.texto}>letra/número certa(o), posição errada</p>
            </div>
            <div className={styles.quadrado}>
                <p className={styles.texto}>letra/número certa(o), posição certa</p>
            </div>
        </section>
    )
}

export default Legenda;