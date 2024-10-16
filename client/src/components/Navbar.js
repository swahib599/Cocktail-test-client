import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Cocktail App</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/cocktails" className="text-white hover:text-gray-300">Cocktails</Link>
          <Link to="/auth" className="text-white hover:text-gray-300">Login/Register</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white py-2 px-4 hover:bg-gray-700">Home</Link>
          <Link to="/cocktails" className="block text-white py-2 px-4 hover:bg-gray-700">Cocktails</Link>
          <Link to="/auth" className="block text-white py-2 px-4 hover:bg-gray-700">Login/Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;