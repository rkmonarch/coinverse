import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/form-elements/input";
import Button from "@/components/form-elements/button";
import Checkbox from "@/components/form-elements/checkbox";

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
            onChange={() => {}}
            helper="This Can Be A Discord Server, Project Or Your Own Name."
          />
          <Input
            id="symbol"
            name="symbol"
            label="Symbol"
            placeholder="FF"
            type="text"
            onChange={() => {}}
            helper="Your Token Symbol (1-7 Characters), No '$' Sign Required."
          />
          <Input
            id="supply"
            name="supply"
            label="Supply"
            placeholder="0"
            type="number"
            onChange={() => {}}
            helper="Recommended Supply - 10 Million Tokens."
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Rewarding"
            type="number"
            onChange={() => {}}
            helper="Give Us A Brief Description On How You Would Use The Token."
          />
          <Checkbox label="Minting" onChange={()=>{}} />
          <Checkbox label="Minting" onChange={()=>{}} />
          <Button label="Create" onClick={() => {}} />
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
