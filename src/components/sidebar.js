import React from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai"

const NavItem = ({ link, icon, name }) => {
  return (
    <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
      <Tooltip label={name} fontSize="md" placement="right">
        <Link
          href={link}
          className="flex justify-center sm:justify-start items-center py-2"
        >
          {icon}
        </Link>
      </Tooltip>
    </li>
  );
};

const Sidebar = () => {
  const navItemObj = [
    {
      link: "/dashboard",
      icon: (
        <AiOutlineDashboard size={25} />
      ),
      name: "DASHBOARD",
    },
    {
      link: "",
      icon: (
        <BiWalletAlt size={25} />
      ),
      name: "CONNECT WALLET",
    },
  ];
  
  return (
    <aside className="fixed min-h-[100vh] w-[60px] border-r border-[#666666] py-5 dark:border-[#605e8a]">
      <div>
        <ul className="flex flex-col items-center justify-center space-y-4 w-full">
          {navItemObj.map((item) => (
            <NavItem
              key={item.link}
              link={item.link}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
