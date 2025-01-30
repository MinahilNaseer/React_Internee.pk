import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InternshipPage from "./pages/InternshipPage";
import GraduateProgram from "./pages/GraduateProgram";
import CompColl from "./pages/CompColl";
import LoginPortal from "./pages/LoginPortal";

function App() {
  // Hook to get the current location
  const location = useLocation();

  // Pages where header and footer should not appear
  const noHeaderFooterPages = ["/LoginPortal"];

  // Check if the current path matches noHeaderFooterPages
  const hideHeaderFooter = noHeaderFooterPages.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {/* Conditionally render Header */}
      {!hideHeaderFooter && <Header />}
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InternshipPage" element={<InternshipPage />} />
          <Route path="/GraduateProgram" element={<GraduateProgram />} />
          <Route path="/CompColl" element={<CompColl />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/LoginPortal" element={<LoginPortal />} />
        </Routes>
      </main>
      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
