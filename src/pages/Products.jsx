import redRose from "../assets/images/red-rose.jpg";
import pinkBlossom from "../assets/images/pink-blossom.jpg";
import nudeElegance from "../assets/images/nude-elegance.jpg";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Red Rose", price: 12.99, image: redRose },
  { id: 2, name: "Pink Blossom", price: 14.99, image: pinkBlossom },
  { id: 3, name: "Nude Elegance", price: 16.99, image: nudeElegance },
];

const Products = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center mb-6">Our Lipsticks</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
