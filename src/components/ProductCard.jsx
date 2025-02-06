const ProductCard = ({ product }) => {
    return (
      <div className="border p-4 rounded-md shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-pink-500 font-semibold">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  