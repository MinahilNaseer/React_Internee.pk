import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";


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

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Internee.pk Logo" className="w-12" />
          <h1 className="text-xl font-bold text-green-600">Internee.pk</h1>
        </div>
        <ul className="flex space-x-6 text-gray-700">
          <li><Link to="/" className="hover:text-green-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-600">Internship</Link></li>
          <li><Link to="/about" className="hover:text-green-600">Graduate Program</Link></li>
          <li><Link to="/about" className="hover:text-green-600">Company Collaboration</Link></li>
          <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Job Portal</button>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white">Internee's Login</button>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-6 text-center">
      <p>&copy; 2025 Internee.pk. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Looking for dream internship?</h2>
            <p className="text-gray-600 mb-4">
              Internee.pk kickstarts students' tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
            </p>
            <div className="flex space-x-4">
              <img src="/logo1.png" alt="Logo 1" className="w-12" />
              <img src="/logo2.png" alt="Logo 2" className="w-12" />
              <img src="/logo3.png" alt="Logo 3" className="w-12" />
              <img src="/logo4.png" alt="Logo 4" className="w-12" />
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/hero-image.png" alt="Internship" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: 100 }}>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700">
        Internee.pk aims to enhance the IT sector by providing opportunities for talented individuals. Explore meaningful projects and work under professional guidance.
      </p>
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border-gray-300 rounded p-2 focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
<div className="bg-blue-500 text-white text-center p-4">
  Tailwind is working!
</div>


export default App;
