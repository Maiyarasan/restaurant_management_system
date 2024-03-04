import React from 'react';
import { FaAddressBook, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-10 w-full bg-gray-100 rounded-lg shadow px-4 lg:px-0"> 
      <div className='flex flex-col w-full md:flex-row justify-center items-center bg-gray-300 rounded-lg p-4 mb-8 transition duration-300 ease-in-out hover:bg-blue-300 hover:scale-105 hover:shadow-lg'>
        <FaAddressBook className='text-4xl mr-4 mb-4 md:mb-0'/>
        <div className='font-bold text-center md:text-left'>
          <p>No.11, Richie Street, New Delhi, India</p>
          <p>+21 3452 2643</p>
        </div>
      </div>
          
      <section className="mt-12 mb-10">
              <h2 className="text-xl font-semibold text-center">Website Developer</h2>
                <p className="text-gray-500 text-center mt-4">
                  This website was developed by Maiyarasan M, an aspiring software engineer, for practice purposes. For inquiries or suggestions, feel free to reach out via email at <a href="mailto:maiyarasan11@gmail.com" className="text-blue-500 hover:underline">maiyarasan11@gmail.com</a>.
                </p>
      </section>
          
      <div className='flex justify-center space-x-8 mb-4'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className='text-4xl hover:text-blue-600 mb-4' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className='text-4xl hover:text-pink-500 mb-4' />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className='text-4xl hover:text-blue-400 mb-4' />
        </a>
      </div>    
    </div>
  );
}

export default Footer;
