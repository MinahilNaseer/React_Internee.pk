import { Link } from "react-router-dom";
import React from "react";

function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <img src="/logo-intern.png" alt="Internee.pk Logo" className="w-25 h-12" />
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

export default Header;
