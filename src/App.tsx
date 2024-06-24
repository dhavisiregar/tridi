import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }),
      AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="profil">
        <Profile />
      </div>
      <div id="produk">
        <Projects />
      </div>
      <div id="kontak">
        <Contact />
      </div>
    </div>
  );
};

export default App;
