import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cart } = useCart(); // ✅ Get the cart items

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((product, index) => (
            <div key={index} className="flex items-center border p-4 rounded-lg shadow">
              <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg mr-4"/>
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
