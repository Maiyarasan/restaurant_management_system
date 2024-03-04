import React from 'react';
import { ImPriceTags } from "react-icons/im";
import {useCart} from "react-use-cart";

const ItemCard = (props) => {
  const {addItem} = useCart();
  return (
    <div className='rounded overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out m-4 md:m-8'>
        <img src={props.img} alt={props.title} className='w-full h-48 object-cover object-center' />
        <div className='px-4 py-2 md:px-6 md:py-4'>
            <div className='font-bold text-lg md:text-xl mb-2'>{props.title}</div>
            <p className='text-gray-700 text-base'>{props.desc}</p>
            <div className='mt-3 font-semibold flex items-center'><ImPriceTags size={15}/> ₹ : {props.price}</div>
            <button
              onClick={() => { addItem(props.item); alert('Item added to the cart!'); }} 
              className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-base'>
                Add to cart
            </button>
        </div>
        
    </div>
  );
};

export default ItemCard;
