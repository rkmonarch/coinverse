import { useColorMode } from "@chakra-ui/color-mode";
import { BiSun, BiMoon } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
          <button aria-label="Toggle Mode" onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <BiMoon size="25" className="text-black hover:cursor-pointer" />
            ) : (
              <BiSun size="20" className="text-white hover:cursor-pointer" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
