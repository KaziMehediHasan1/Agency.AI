import { useState } from "react";
import Navbar from "./components/Navbar";
type Theme = "light" | "dark";
const App = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) ?? "light"
  );
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
