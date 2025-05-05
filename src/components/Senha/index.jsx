import InputTentativa from "../InputTentativa";
import Modo from "../Modo";

const Senha = () => {
    return (
        <>
            <h1>Senha</h1>
            <Modo>
                Palavra
            </Modo>
            <Modo>
                Número
            </Modo>
            <br />
            <InputTentativa />
        </>
    )
}

export default Senha;