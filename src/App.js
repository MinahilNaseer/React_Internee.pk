import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
