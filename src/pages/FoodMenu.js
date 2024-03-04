import React from 'react';
import ItemCard from '../components/ItemCard';
import MenuData from '../components/MenuData';
import Footer from '../components/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

const FoodMenu = () => {
  return (
    <div>
      <CartProvider>
        <div className='flex flex-col items-center w-auto bg-blue-100 '>
          <div className="flex flex-col sm:flex-row justify-between items-center w-auto px-4">
            <h1 className="mt-10 text-2xl sm:text-3xl uppercase font-bold mb-4 text-center text-white bg-blue-500 py-2 rounded shadow flex-grow p-4">
                Food Menu Items
            </h1>
            <button className="flex text-white bg-blue-500 p-2 rounded shadow mt-4 sm:mt-0 sm:ml-auto">
                <Link to='/cart' className="flex items-center">
                    <FaShoppingCart size={24} />
                    <span className='ml-2'>CART</span>
                </Link>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 my-4">
            {MenuData.menuItems.map((item) => (
              <ItemCard 
                  key={item.id} 
                  img={item.img} 
                  title={item.title} 
                  desc={item.desc} 
                  price={item.price} 
                  item={item}
                />
            ))}
          </div>
          <button className='mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            <Link to={`/`}>
              Back
            </Link>
          </button>
        </div>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default FoodMenu;
