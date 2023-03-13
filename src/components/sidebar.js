import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@chakra-ui/react";

const NavItem = ({ link, icon, name }) => {
  return (
    <li className="w-[80%] border-b border-[#666666] flex justify-center pb-2">
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
        <Image
          src="/dashboard-icon.svg"
          width="30"
          height="30"
          alt="dashboard"
        />
      ),
      name: "DASHBOARD",
    },
    {
      link: "",
      icon: (
        <Image src="/wallet-icon.svg" width="25" height="25" alt="wallet" />
      ),
      name: "CONNECT WALLET",
    },
  ];
  
  return (
    <aside className="fixed min-h-[100vh] w-[60px] border-r border-[#666666] py-3">
      <div>
        <ul className="flex flex-col items-center justify-center space-y-2 w-full">
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
