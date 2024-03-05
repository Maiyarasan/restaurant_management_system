import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="p-4 ">
      <ul className="flex justify-center md:justify-end space-x-4 w-full">
        <li className="list-none">
          <Link to="/" className="px-3 py-2 rounded text-base font-medium text-blue-700 hover:text-white hover:bg-blue-300 transition duration-150 ease-in-out">Home</Link>
        </li>
        <li className="list-none">
          <Link to="/menu" className="px-3 py-2 rounded text-base font-medium text-blue-700 hover:text-white hover:bg-blue-300 transition duration-150 ease-in-out">Menu</Link>
        </li>
        <li className="list-none">
          <Link to="/" className="px-3 py-2 rounded text-base font-medium text-blue-700 hover:text-white hover:bg-blue-300 transition duration-150 ease-in-out">Contact</Link>
        </li>
        <li className="list-none">
          <Link to="/reviews" className="px-3 py-2 rounded text-base font-medium text-blue-700 hover:text-white hover:bg-blue-300 transition duration-150 ease-in-out">Reviews</Link>
        </li>
        <li className="list-none">
          <Link to="/about" className="px-3 py-2 rounded text-base font-medium text-blue-700 hover:text-white hover:bg-blue-300 transition duration-150 ease-in-out">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
