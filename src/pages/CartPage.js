import React from 'react'
import { CartProvider } from 'react-use-cart'
import { Cart } from '../components/Cart'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <CartProvider>
    <div>
        <Cart />
        
        <div className="flex justify-between items-center w-1/2 px-2 mb-10">
            <button className='ml-[40%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                <Link to={`/menu`}>
                Back
                </Link>
            </button>
            <button className='ml-[99%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                <Link to={`/`}>
                Home
                </Link>
            </button>
        </div>

        
    </div>
    </CartProvider>
  )
}

export default CartPage