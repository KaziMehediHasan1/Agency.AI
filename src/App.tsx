import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompa from "./components/TrustedCompa";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
type Theme = "light" | "dark";
const App = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedCompa />
      <Services />
      <OurWork />
    </div>
  );
};

export default App;
