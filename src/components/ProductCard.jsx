import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useCart } from '../Context/CartContext'; 
import { useNavigate } from 'react-router-dom'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="p-4 flex flex-col items-center h-full">
      {/* ❌ REMOVE IMAGE FROM HERE ❌ */}
      
      {/* Product Name */}
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      
      {/* Product Price */}
      <p className="text-gray-600 mb-2">${product.price}</p>

      {/* Star Rating */}
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < Math.floor(product.rating) ? (
                <BsStarFill className="text-yellow-400" />
              ) : index === Math.floor(product.rating) && product.rating % 1 !== 0 ? (
                <BsStarHalf className="text-yellow-400" />
              ) : (
                <BsStar className="text-gray-400" />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="flex items-center justify-center bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
      >
        <FaShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
