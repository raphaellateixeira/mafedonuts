import { BrowserRouter, Routes, Route } from "react-router-dom";
import Captura from "./pages/Captura";
import Obrigado from "./pages/Obrigado";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Captura />} />
      <Route path="/obrigado" element={<Obrigado />} />
      <Route path="*" element={<Captura />} />
    </Routes>
  </BrowserRouter>
);

export default App;
