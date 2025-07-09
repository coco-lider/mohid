export default function Hero() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-5xl font-extrabold mb-6">Discover Most Suitable Watches</h1>
          <p className="text-gray-400 mb-6 max-w-md">
            Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!
          </p>
          <div className="flex gap-2">
            <input type="text" placeholder="Find the best brands" className="px-4 py-2 rounded text-black w-64" />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Search</button>
          </div>
        </div>
        <img
          src="/images/hero-watch.png"
          alt="Hero Watch"
          className="w-72 md:w-96 mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}