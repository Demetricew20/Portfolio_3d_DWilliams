import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, About, Projects, Contact } from "./pages";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoadingCanvas, setIsLoadingCanvas] = useState(true);

  return (
    <main className="bg-slate-300/20 min-h-[100vh]">
      <Router>
        <Navbar setIsLoadingCanvas={isLoadingCanvas} />
        <Routes>
          <Route
            path="/"
            element={<Home isLoadingCanvas={isLoadingCanvas} setIsLoadingCanvas={setIsLoadingCanvas} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
