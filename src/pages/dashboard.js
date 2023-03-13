import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { BiSun, BiMoon } from "react-icons/bi";

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <div>
        <button aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <BiMoon size="25" className="text-black hover:cursor-pointer" />
          ) : (
            <BiSun size="20" className="text-white hover:cursor-pointer" />
          )}
        </button>
      </div>
      <Input
        id="email"
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        // onChange={(e) => setEmail(e.target.value)}
      />
      <Button label="Register" onClick={() => {}} />
    </div>
  );
};

export default Dashboard;
