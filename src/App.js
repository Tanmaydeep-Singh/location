import "./App.css";
import Signin from "./pages/Signin_page";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Signin />} />
    </Routes>
  );
}

export default App;
