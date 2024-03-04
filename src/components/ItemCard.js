import React from 'react';
import { ImPriceTags } from "react-icons/im";
import {useCart} from "react-use-cart";

const ItemCard = (props) => {
  const {addItem} =useCart();
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out m-16'>
        <img src={props.img} alt={props.title} className='w-full h-48 object-cover object-center' />
        <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{props.title}</div>
            <p className='text-gray-700 text-base'>{props.desc}</p>
            <div className='mt-3 font-semibold'><ImPriceTags size={15}/> ₹ : {props.price}</div>
            <button
              onClick={() => { addItem(props.item); 
              alert('Item added to the cart!'); }} 
              className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                Add to cart
            </button>
        </div>
        
    </div>
  );
};

export default ItemCard;
