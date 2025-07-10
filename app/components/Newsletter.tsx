export default function Newsletter() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-500 mb-4">Subscribe To Newsletter</h2>
      <p className="text-gray-600 mb-6">Get weekly updates and special offers delivered directly to your inbox.</p>
      <form className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 text-gray-500 border rounded w-full sm:w-80"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </section>
  );
}