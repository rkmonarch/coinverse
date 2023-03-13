import { BiSun, BiMoon } from "react-icons/bi";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <>
      <nav className="w-full mx-auto py-5">
        <div className="max-w-[1080px] container flex flex-wrap justify-end space-x-5 items-center mx-auto">
          <button className="flex items-center space-x-3 border rounded-full px-10 py-3 text-[#666666]">
            <p>Connect Wallet</p>
            <Image
              src="/wallet-icon.svg"
              width="15"
              height="15"
              alt="dashboard"
            />
          </button>
          {theme === "light" ? (
            <BiMoon
              size="25"
              onClick={switchTheme}
              className="text-white hover:cursor-pointer"
            />
          ) : (
            <BiSun
              size="20"
              onClick={switchTheme}
              className="text-white hover:cursor-pointer"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
