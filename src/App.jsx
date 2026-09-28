import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/homepage";
import Experience from "./pages/experience";
import Writing from "./pages/writing";
import Photography from "./pages/photography";
import Marketing from "./pages/marketing";
import Pharmacy from "./pages/pharmacy";
import Education from "./pages/education";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;