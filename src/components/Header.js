import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header() {
    const location = useLocation();

    const getLinkClass = (path) =>
        location.pathname === path
            ? "text-green-600 font-semibold"
            : "text-gray-700 hover:text-green-600";

    return (
        <header data-testid="header" className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center space-x-4">
                    <img src="/logo-intern.png" alt="Internee.pk Logo" className="w-25 h-12" />
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className={getLinkClass("/")}>Home</Link>
                    </li>
                    <li>
                        <Link to="/InternshipPage" className={getLinkClass("/InternshipPage")}>Internship</Link>
                    </li>
                    <li>
                        <Link to="/GraduateProgram" className={getLinkClass("/GraduateProgram")}>Graduate Program</Link>
                    </li>
                    <li>
                        <Link to="/CompColl" className={getLinkClass("/CompColl")}>
                            Company Collaboration
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
                    </li>
                </ul>
                <div className="flex space-x-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Job Portal</button>
                    <Link
                        to="/LoginPortal"
                        className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white"
                    >
                        Internee's Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
