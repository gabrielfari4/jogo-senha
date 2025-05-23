import "./App.css";
import Senha from "./components/Senha";
import { SenhaProvider } from "./context/SenhaProvider";


// TODO: letra que não se repete
// TODO: botão reiniciar
// TODO: score
// TODO: responsividade


function App() {
    return (
        <>
            <SenhaProvider>
                <Senha />
            </SenhaProvider>
        </>
    );
}

export default App;
