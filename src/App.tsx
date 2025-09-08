import { useEffect, useRef, useState } from "react";
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

  const outlineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // cursor postion tracking..
  const mouse = useRef({ x: 0, y: 0 });
  const postion = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      postion.current.x += (mouse.current.x - postion.current.x) * 0.1;
      postion.current.y += (mouse.current.y - postion.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px,${mouse.current.y - 6}px,0)`;
        outlineRef.current.style.transform = `translate3d(${
          postion.current.x - 20
        }px, ${postion.current.y - 20}px,0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
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
      <Footer theme={theme} />
      {/* CUSTOME MOUSE RING  */}
      <div
        ref={outlineRef}
        className="fixed z-[9999] top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none"
        style={{ transition: "transform 0.1s ease-out" }}
      />
      {/* CUSTOME CURSOR DOT */}
      <div
        ref={dotRef}
        className="fixed z-[9999] top-0 left-0 h-3 w-3 rounded-full  bg-primary pointer-events-none "
      />
    </div>
  );
};

export default App;
