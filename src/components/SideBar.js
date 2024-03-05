import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [sideBar, setSideBar] = useState(false);
    const sideBarRef = useRef();

    const handleNav = () => {
        setSideBar(!sideBar);
    };

    const handleClickOutside = (event) => {
        if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
            setSideBar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="fixed z-50 top-4 left-4">
                <button className="p-5" onClick={handleNav}>
                    {sideBar ? <IoClose size={30} className="text-blue-500" /> : <FaBars size={30} className="text-blue-500" />}
                </button>
            </div>
            <div ref={sideBarRef} className={`fixed z-40 left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] h-full bg-blue-300 p-5 pt-24 transform ${sideBar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <ul className='uppercase font-bold'>
                    <li className='p-4 border-b border-gray-600 hover:bg-blue-400 hover:text-white transform transition duration-150 ease-in-out rounded'><Link to="/" onClick={() => setSideBar(false)}>Home</Link></li>
                    <li className='p-4 border-b border-gray-600 hover:bg-blue-400 hover:text-white transform transition duration-150 ease-in-out rounded'><Link to="/menu" onClick={() => setSideBar(false)}>Menu</Link></li>
                    <li className='p-4 border-b border-gray-600 hover:bg-blue-400 hover:text-white transform transition duration-150 ease-in-out rounded'><Link to="/cart" onClick={() => setSideBar(false)}>Cart</Link></li>
                    <li className='p-4 border-b border-gray-600 hover:bg-blue-400 hover:text-white transform transition duration-150 ease-in-out rounded'><Link to="/reviews" onClick={() => setSideBar(false)}>Reviews</Link></li>
                    <li className='p-4 hover:bg-blue-400 hover:text-white transform transition duration-150 ease-in-out rounded'><Link to="/about" onClick={() => setSideBar(false)}>About</Link></li>
                </ul>
            </div>
        </>
    );
};

export default SideBar;
