import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import { WagmiConfig } from "wagmi";
import { client } from "../utils/wagmi";
import { ConnectKitProvider } from "connectkit";

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
    <ConnectKitProvider theme="retro">
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
