export default function Testimonials() {
  const reviews = [
    {
      name: "Hamza Faizi",
      text: "Very stylish and affordable. Great quality!",
      rating: 5,
      image: "/images/user1.jpg",
    },
    {
      name: "Nurly Husein",
      text: "Fast delivery and reliable service. Love the watch!",
      rating: 5,
      image: "/images/user2.jpg",
    },
  ];
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-500 mb-8">What People Say About Us</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white shadow p-6 rounded w-80">
            <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 mb-2">{review.text}</p>
            <strong>{review.name}</strong>
            <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}