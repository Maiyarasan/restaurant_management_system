import React from 'react';
import ImageSlider from '../components/ImageSlider';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';
// import SideBar from '../components/SideBar';

const HomePage = () => {
  return (
    <div className='bg-blue-200 min-h-screen'>
      <div>
        <h1 className="text-center text-3xl sm:text-5xl font-bold mt-0.1 text-blue-500 bg-blue-200 p-2 sm:p-5 rounded-2xl shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out">
          WELCOME TO OUR RESTAURANT!
        </h1>
      <div>  
        {/* <SideBar /> */}
        <NavBar />
    </div>
        <ImageSlider />
          
          <div className='flex justify-end h-auto mt-10 mx-5 sm:mt-20 sm:mx-10 bg-gray-200 w-auto h-auto rounded-3xl p-4 transition duration-300 ease-in-out hover:bg-blue-300 hover:scale-105 hover:shadow-lg'>
            <p className='text-xl sm:text-2xl text-center'>
              "Step into our cozy restaurant, where every dish tells a story of passion and flavor. 
              With an inviting ambiance and attentive service, we strive to create a memorable dining experience for every guest. 
              Indulge in our carefully crafted menu, showcasing the freshest ingredients and culinary creativity. 
              From savory starters to decadent desserts, each bite is a journey of delight. 
              Join us and savor the essence of fine dining in every delectable moment."
            </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold ml-5 my-7 text-blue-700 hover:text-blue-900 transition duration-300 underline">
          Savor the Flavors:
        </h1>
        <ImageCard />
      </div>
      <Footer />
      
    </div>
  );
};

export default HomePage;
