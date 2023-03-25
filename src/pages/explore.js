import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import NFTDetails from "../components/nft-cards";
import { useEffect, useState } from "react";
import { NFTContractAddress } from "../utils/constants";
import { useAccount, useContractRead } from "wagmi";
import NFTABI from "../utils/NFTABI.json";

export default function Products() {
 

    const [productData, setProductData] = useState([{}]);
    const { address } = useAccount();
  
    const { data, isError, isLoading } = useContractRead({
      address: NFTContractAddress,
      abi: NFTABI,
      functionName: "getNFTsWithMetadataCreatedByCreator",
      args: [address],
      onSuccess: (data) => {
        console.log("Succes");
      },
      onError: (error) => {
        console.log("Error", error);
      }
    });
  
    useEffect(() => {
      
      if (data) {
        console.log(data);
       console.log(isError);
      }
    }, [data]);

 
  return (
    <>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Explore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={"20"}
        maxW={"container.xl"}
        my={16}
        mx={"auto"}
      >
        {/* {productData.map((products: , index: number) => (
          <NFTDetails {...products} index={index} key={index} />
        ))} */}
      </SimpleGrid>
    </>
  );
}