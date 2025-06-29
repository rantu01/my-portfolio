import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", to: "/#" },
    { id: 2, name: "About", to: "/#about" },
    { id: 3, name: "Skills", to: "/#skills" },
    { id: 4, name: "Projects", to: "/#projects" },
    { id: 5, name: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-teal-400 cursor-pointer">
          <Link smooth to="/#" onClick={() => setIsOpen(false)}>Rantu Mondal</Link>
          
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                smooth
                to={item.to}
                className="hover:text-teal-400 cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-1 bg-white my-1"></div>
          <div className="w-6 h-1 bg-white my-1"></div>
          <div className="w-6 h-1 bg-white my-1"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 space-y-4 text-center py-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                smooth
                to={item.to}
                className="hover:text-teal-400 cursor-pointer transition block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
