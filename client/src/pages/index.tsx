import { Box, Link, Button, Container, Image, VStack } from "@chakra-ui/react";
import Navbar from "@/components/layout/navbar";

// import { useColorMode } from "../components/ui/color-mode";

export default function Home() {
  // // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box minH={"100dvh"}>
        <Navbar />
        <Container contain={"xl"}>
          <Box>
            {/* <Button>
            <Box
            as="h1"
            fontFamily="var(--font-geist-sans)"
            onClick={
              colorMode === "light" ? toggleColorMode : toggleColorMode
              }
              >
              Button
              </Box>
              </Button> */}
            <VStack gap={5}>
              <Link href="/_Login">
                <Box as="h2">
                  <Button variant={"surface"}>Login</Button>
                </Box>
              </Link>
              <Link href="/_Register">
                <Box as="h2">
                  <Button variant={"surface"}>Register</Button>
                </Box>
              </Link>
            </VStack>
            <Box>
              <Image src="logo.svg" alt="Logo" width={500} height={500} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
