import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, img, link }) => {
  return (
    <div className="w-full md:w-1/3 flex flex-col">
      <h1 className="text-[#9f9f9f] text-sm pl-5 pb-3">LAUNCH A COMMUNITY TOKEN</h1>
      <Link href={link} className="flex items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-[30px] overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
        </div>
        <div className="flex mx-auto justify-center w-[100%]">
          <Image src={img} width="150" height="100" alt="Icon" />
        </div>
      </Link>
    </div>
  )
}

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex space-x-2 items-center mb-10">
        <Image src="/dashboard-icon.svg" width="25" height="25" alt="Icon" />
        <h1 className="text-[#1e1e1e] font-semibold text-xl">DASHBOARD</h1>
      </div>
      <div className="flex space-x-3">
        <Card link="/token" title="TOKEN" img="/tokens.webp" />
        <Card link="/token" title="NFT MEMBERSHIP" img="/tokens.webp" />
        <Card link="/token" title="AIRDROP" img="/tokens.webp" />
      </div>
    </Layout>
  );
};

export default Dashboard;
