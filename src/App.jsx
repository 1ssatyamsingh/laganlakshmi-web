import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/AboutUs";
import Properties from "./page/Properties";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
