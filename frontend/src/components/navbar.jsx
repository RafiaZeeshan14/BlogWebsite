import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    setMenuOpen(false); // Close the menu after selecting a theme
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" text-white flex justify-between items-center mx-auto  p-10 bg-gray-900">
      <div className="flex items-center ">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 bg-blue-500"></div>
          <span className="text-xl font-bold">YourThoughts</span>
        </div>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <ul className="flex space-x-6">
          <li><Link to={"/blogs"} className="hover:underline">Blog</Link></li>
          <li><Link to={"/write"} className="hover:underline">Write</Link></li>
          <li><a href="#" className="hover:underline">Membership</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
        </ul>
        <div className="relative">
          <button onClick={handleMenuToggle}>
            { <FaMoon /> }
          </button>
          {/* {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg p-2">
              <button onClick={() => toggleTheme('light')} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaSun /><span>Light</span>
              </button>
              <button onClick={() => toggleTheme('dark')} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaMoon /><span>Dark</span>
              </button>
              <button onClick={() => toggleTheme('system')} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
                <FaDesktop /><span>System</span>
              </button>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
