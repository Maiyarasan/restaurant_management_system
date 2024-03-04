import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section>
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        
        <p className="text-gray-600 text-lg text-center">
          Welcome to our Restaurant, where we blend exquisite flavors with authentic culinary traditions from around the world. Established in 2023 , 
          our restaurant offers a unique dining experience in a cozy and inviting atmosphere. Our commitment to quality ingredients, exceptional service, 
          and innovative dishes has made us a favorite among locals and visitors alike. 
          Join us for a meal and let us take you on a memorable gastronomic journey.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-center">Website Developer</h2>
        <p className="text-gray-500 text-center mt-4">
          This website was developed by Maiyarasan M, an aspiring software engineer, for practice purposes. For inquiries or suggestions, feel free to reach out via email at <a href="mailto:maiyarasan11@gmail.com" className="text-blue-500 hover:underline">maiyarasan11@gmail.com</a>.
        </p>
      </section>
      <div className="mt-10 flex justify-center">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Home</Link>
      </div>
    </div>
  );
};

export default AboutPage;
