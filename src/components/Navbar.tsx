import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <h1 className="text-2xl font-semibold text-black">Navbar</h1>
      <img src={theme === "dark" ? assets.logo_dark : assets.logo} alt="" />
    </div>
  );
};

export default Navbar;
