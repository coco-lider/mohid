"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, User, Watch } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const parsed = stored ? JSON.parse(stored) : [];
    setCartCount(parsed.length);

    const handleStorage = () => {
      const newCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(newCart.length);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        <span className="flex justify-center items-center"><Watch/> Mohid</span>
      </Link>
      <nav className="hidden md:flex gap-6 text-gray-300">
        <Link href="/" className={pathname === "/" ? "text-white" : "hover:text-white"}>Home</Link>
        <Link href="#brands">Brands</Link>
        <Link href="#products">Recent Products</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#about">About</Link>
      </nav>
      <div className="flex gap-4 items-center relative">
        <Search size={20} />
        <User size={20} />
        <Link href="/cart" className="relative">
          <ShoppingCart size={20} className="text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}