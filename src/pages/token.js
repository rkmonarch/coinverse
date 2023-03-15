import React, { useEffect } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import ABI from "../utils/ABI.json";
import { contractAddress } from "@/utils/constants";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  const { address } = useAccount();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contractAddress);
    console.log("Hello", name, symbol, supply);
  };

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: ABI,
    functionName: "CreateToken",
    functionArgs: [address, name, symbol, 0, 10*(10**18), 1, parseInt(supply)*10**18, [address]],
  })

  const { data, write } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction(data?.hash);

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
    }
  }, [isSuccess]);

  return (
    <Layout>
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <div className="flex items-center w-[90%] md:w-full bg-gradient-to-r from-emerald-500 to-lime-600 rounded-[30px] overflow-hidden shadow-lg">
          <div className="hidden md:flex mx-auto justify-center">
            <Image src="/tokens.webp" width="200" height="200" alt="Icon" />
          </div>
          <div className="px-10 py-8 text-white text-right">
            <div className="font-bold text-xl mb-2">TOKEN</div>
            <div className="font-bold text-md mb-2">
              Mint a personal or a community token on a fixed supply Already
              have a token? Import token into Coinvise
            </div>
          </div>
        </div>
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Forefront"
            type="text"
            onChange={(e) => setName(e.target.value)}
            helper="This Can Be A Discord Server, Project Or Your Own Name."
          />
          <Input
            id="symbol"
            name="symbol"
            label="Symbol"
            placeholder="FF"
            type="text"
            onChange={(e) => setSymbol(e.target.value)}
            helper="Your Token Symbol (1-7 Characters), No '$' Sign Required."
          />
          <Input
            id="supply"
            name="supply"
            label="Initial Supply"
            placeholder="0"
            type="number"
            onChange={(e) => setSupply(e.target.value)}
            helper="Recommended Supply - 10 Million Tokens."
          />
          <Button label="Create" onClick={(e) => {
            e.preventDefault();
            write();
          }} />
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
