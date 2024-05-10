import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Logs from "./pages/Logs";
import Feedback from "./pages/Feedback";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<Report />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
