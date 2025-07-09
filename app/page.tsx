import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <main>
      <Header/>
      <Hero />
      <Brands />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}