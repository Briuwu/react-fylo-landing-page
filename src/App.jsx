import Hero from "./components/Header/Hero";
import Navbar from "./components/Header/Navbar";
import Cards from "./components/Main/Cards";
import Info from "./components/Main/Info";
import Reviews from "./components/Main/Reviews";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="mx-auto my-40 max-w-[1440px] px-10">
        <Cards />
        <Info />
        <Reviews />
      </main>
    </>
  );
}
