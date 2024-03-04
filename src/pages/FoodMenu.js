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
    <div className='flex flex-col items-center w-full'>
    <div className="flex justify-between items-center w-full px-4">
        <h1 className="text-3xl uppercase font-bold mb-4 text-center text-white bg-blue-500 py-2 rounded shadow flex-grow">
            Food Menu Items
        </h1>
        
    </div>
    <button className="flex  ml-[90%] text-white bg-blue-500 p-2 rounded shadow">
            <Link to='/cart'>
                <FaShoppingCart size={30} />
                <p className='m-2'>CART</p>
            </Link>
        </button>
      <div className="grid grid-cols-1 uppercase md:grid-cols-3 gap-6 w-full px-4">
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
      <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
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
