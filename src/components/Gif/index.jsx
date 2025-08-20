import derrotaGif from './assets/derrota.gif';
import errouGif from './assets/errou.gif';
import vitoriaGif from './assets/vitoria.gif';
import styles from './Gif.module.css';

const gifMap = {
    derrota: derrotaGif,
    errou: errouGif,
    vitoria: vitoriaGif 
}

const Gif = ({ status }) => {
    const gifSrc = gifMap[status]

    return (
            <img 
                src={gifSrc} 
                alt={`Gif de ${status}`}
                className={styles.gif}
            />
    )
}

export default Gif;