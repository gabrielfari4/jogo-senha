import derrotaGif from './assets/derrota.gif';
import errouGif from './assets/errou.gif';
import vitoriaGif from './assets/vitoria.gif';

const gifMap = {
    derrota: derrotaGif,
    errou: errouGif,
    vitoria: vitoriaGif 
}

const Gif = ({ status }) => {
    const gifSrc = gifMap[status]

    return (
            <img src={gifSrc} alt={`Gif de ${status}`} style={{ width: '20vw', height: '20vh'}}/>
    )
}

export default Gif;