import React from 'react'
import { useCart } from 'react-use-cart'

export const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
    } = useCart();
    
    if (isEmpty) return <p className="text-center text-2xl mt-5">Your cart is empty</p>;
    
    return (
        <section className="max-w-4xl mx-auto p-5">
            <h2 className="text-3xl font-bold mb-5">Cart (<span>{totalUniqueItems}</span>) total Items: (<span>{totalItems}</span>)</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-lg divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="p-6 font-medium text-left text-gray-900 whitespace-nowrap">Item</th>
                            <th className="p-6 font-medium text-left text-gray-900 whitespace-nowrap">Price</th>
                            <th className="p-6 font-medium text-left text-gray-900 whitespace-nowrap">Quantity</th>
                            <th className="p-6 font-medium text-left text-gray-900 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {items.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-6 text-gray-700 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img src={item.img} alt={item.title} className="w-20 h-20 object-cover mr-4"/>
                                        {item.title}
                                    </div>
                                </td>
                                <td className="p-6 text-gray-700 whitespace-nowrap">{item.price}</td>
                                <td className="p-6 text-gray-700 whitespace-nowrap">Quantity ({item.quantity})</td>
                                <td className="p-6 text-gray-700 whitespace-nowrap">
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="text-base bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="text-base bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ml-2">+</button>
                                    <button onClick={() => removeItem(item.id)} className="text-base bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-2xl font-semibold mt-5">Total: ₹{cartTotal}</p>
        </section>
    );
};
