import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompa from "./components/TrustedCompa";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
type Theme = "light" | "dark";
const App = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Toaster position="top-center" />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedCompa />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  );
};

export default App;
