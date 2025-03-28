import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white-50 ">
      <div className="p-5 bg-[#15445A]">
        <Header />
      </div>
      <div className="bg-[#C1B48A] h-1.5"></div>
      <div className="">
        <Hero />
      </div>
      <div className="bg-[#C1B48A] h-1.5"></div>
      <div className="p-5 bg-[#15445A]">
        <p className="text-white text-center md:text-2xl text-[10px] pb-6 pt-3">
          اختر البطاقة التي تناسبك
        </p>
        <Cards />
      </div>
      <div className="bg-[#C1B48A] h-1.5"></div>
      <Footer />
    </div>
  );
}
