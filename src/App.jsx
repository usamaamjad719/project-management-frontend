import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import ToastNotification from "./components/ToastNotification";

const App = () => {
  return (
    <Router>
      <ToastNotification />
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
