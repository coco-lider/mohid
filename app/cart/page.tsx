"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const parsed = stored ? JSON.parse(stored) : [];
    setCart(parsed);
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart.filter((item) => item !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const cartItems = products.filter((product) => cart.includes(product.id));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img src={item.thumbnail} alt={item.title} className="h-40 object-contain w-full mb-4" />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-blue-600 font-semibold">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">← Continue Shopping</Link>
      </div>
    </div>
  );
}
