
import { HashRouter, Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import ProtecaoAnimal from './pages/ProtecaoAnimal';
import IbiapabaAdventure from "./pages/IbiapabaAdventure";
import CuidadosSaude from "./pages/CuidadosSaude";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protecao-animal" element={<ProtecaoAnimal />} />
        <Route path="/ibiapaba-adventure" element={<IbiapabaAdventure />} />
        <Route path="/cuidados-saude" element={<CuidadosSaude />} />
      </Routes>
    </HashRouter>
  );
}

export default App;