import "./App.css";
import Senha from "./components/Senha";
import { SenhaProvider } from "./context/SenhaProvider";

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
