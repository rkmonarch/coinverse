import React from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="fixed min-h-[100vh] w-[60px] border-r border-[#666666] py-5 dark:border-[#605e8a]">
      <div>
        <ul className="flex flex-col items-center justify-center space-y-4 w-full">
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="DASHBOARD" fontSize="md" placement="right">
              <Link
                href="dashboard"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <AiOutlineDashboard size={25} />
              </Link>
            </Tooltip>
          </li>
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="CONNECT WALLET" fontSize="md" placement="right">
              <button
                className="flex justify-center sm:justify-start items-center py-2"
                onClick={() => {}}
              >
                <BiWalletAlt size={25} />
              </button>
            </Tooltip>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
