import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Coaching from "./routes/Coaching";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coaching" element={<Coaching />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
