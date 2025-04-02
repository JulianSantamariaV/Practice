import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contadores from "./pages/Contadores";
import AtomPage from "./pages/AtomPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contadores" element={<Contadores />} />
      <Route path="/atom" element={<AtomPage/>}/>
    </Routes>
  );
};

export default App;