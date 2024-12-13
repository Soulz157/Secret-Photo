import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Theme appearance="light">
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Component {...pageProps} />
        </ThemeProvider>
      </Theme>
    </ChakraProvider>
  );
}
