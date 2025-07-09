export default function Brands() {
  const brands = ["Apple", "Xiaomi", "Fitbit"];
  return (
    <section className="py-12 bg-white text-center">
      <div className="flex justify-center gap-12 text-gray-600 text-xl">
        {brands.map((brand) => (
          <span key={brand} className="hover:text-black cursor-pointer">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}