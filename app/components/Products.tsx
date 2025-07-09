"use client";
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=6')
      .then(res => res.json())
      .then(data => setProducts(data.products));

    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const toggleCart = (productId: number) => {
    const updatedCart = cart.includes(productId)
      ? cart.filter(id => id !== productId)
      : [...cart, productId];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <section className="py-16 text-center bg-white" id="products">
      <h2 className="text-3xl font-bold mb-8">Our Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map(product => {
          const isInCart = cart.includes(product.id);
          return (
            <div
              key={product.id}
              className="shadow-lg rounded-lg p-4 border hover:shadow-xl transition"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <div className="text-sm mb-4">
                <span className="line-through text-gray-400 mr-2">
                  ${Math.round(product.price + product.price * (product.discountPercentage / 100))}
                </span>
                <span className="text-blue-600 font-bold">${product.price}</span>
              </div>
              <button
                onClick={() => toggleCart(product.id)}
                className={`px-4 py-2 rounded w-full text-white ${
                  isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
