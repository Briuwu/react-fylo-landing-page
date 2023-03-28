import Footer from "./components/Footer/Footer";
import Hero from "./components/Header/Hero";
import Navbar from "./components/Header/Navbar";
import Cards from "./components/Main/Cards";
import Info from "./components/Main/Info";
import Reviews from "./components/Main/Reviews";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="curve relative" />
      <main className="mt-40 bg-dark-blue-main pb-52">
        <Cards />
        <Info />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
