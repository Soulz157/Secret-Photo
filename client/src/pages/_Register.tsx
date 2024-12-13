import React from "react";
import {
  Box,
  Button,
  Link,
  AbsoluteCenter,
  VStack,
  HStack,
  Input,
  Image,
  Text,
  Separator,
  Circle,
} from "@chakra-ui/react";

function _Register() {
  return (
    <>
      <Box minH={"100dvh"}>
        <Box position="relative" h="80vh">
          <AbsoluteCenter axis={"both"} p={4}>
            <VStack gap="1" w={"28rem"}>
              <Box mt={10}>
                <Image src="logo.svg" alt="Logo" width={300} height={300} />
              </Box>
              <VStack gap={4} w={"28rem"}>
                <Input
                  placeholder="email"
                  variant="outline"
                  borderColor={"black"}
                  h={"2.8rem"}
                  color={"black"}
                  borderRadius={7}
                  fontFamily={"buenard-bold"}
                />
                <Input
                  placeholder="username"
                  variant="outline"
                  borderColor={"black"}
                  h={"2.8rem"}
                  color={"black"}
                  borderRadius={7}
                  fontFamily={"buenard-bold"}
                />
                <Input
                  placeholder="password"
                  variant="outline"
                  borderColor={"black"}
                  h={"2.8rem"}
                  color={"black"}
                  borderRadius={7}
                  fontFamily={"buenard-bold"}
                />
                <Input
                  placeholder="confirm password"
                  variant="outline"
                  borderColor={"black"}
                  h={"2.8rem"}
                  color={"black"}
                  borderRadius={7}
                  fontFamily={"buenard-bold"}
                />
              </VStack>
              <Box mt={4}>
                <VStack>
                  <Button
                    variant={"surface"}
                    background={"#95BFFF"}
                    w={"20rem"}
                    _hover={{ bg: "blue.400" }}
                    fontFamily={"buenard-bold"}
                  >
                    continue
                  </Button>
                  <Text fontSize={"10px"} fontFamily={"buenard-bold"}>
                    <Link href="/_Login">Login?</Link>
                  </Text>

                  <Box mt={5}>
                    <Link href="/">
                      <Button
                        variant={"surface"}
                        background={"#95BFFF"}
                        _hover={{ bg: "blue.400" }}
                        h={8}
                        px={4}
                      >
                        Back
                      </Button>
                    </Link>
                  </Box>
                </VStack>
              </Box>
              <Box>
                <HStack>
                  <Box w={"15rem"}>
                    <Separator borderColor={"blackAlpha.300"} />
                  </Box>
                  <Text fontSize={"12px"} color={"blackAlpha.500"}>
                    or
                  </Text>
                  <Box w={"15rem"}>
                    <Separator borderColor={"blackAlpha.300"} />
                  </Box>
                </HStack>
              </Box>
              <Box p={3}>
                <HStack>
                  <Circle
                    size={"60px"}
                    bg="white"
                    _hover={{
                      bg: "gray.200",
                      transition: "0.4s",
                      shadow: "md",
                    }}
                  >
                    <Image src="XIcon.svg" alt="X" />
                  </Circle>

                  {/* <Link> */}
                  <Circle
                    size={"60px"}
                    bg="white"
                    _hover={{
                      bg: "gray.200",
                      transition: "0.4s",
                      shadow: "md",
                    }}
                  >
                    <Image src="FacebookIcon.svg" alt="Facebook" />
                  </Circle>
                  <Circle
                    size={"60px"}
                    bg="gray.100"
                    _hover={{ bg: "gray.200", shadow: "md" }}
                  >
                    <Image
                      src="GoogleIcon.svg"
                      alt="Google"
                      height="20px"
                      width="20px"
                      borderRadius="full"
                    />
                  </Circle>
                  {/* </Link> */}

                  <Circle
                    size={"60px"}
                    bg="white"
                    _hover={{
                      bg: "gray.200",
                      transition: "0.4s",
                      shadow: "md",
                    }}
                  >
                    <Image
                      src="AppleIcon.svg"
                      alt="AppleIcon"
                      width={"30px"}
                      height={"30px"}
                    />
                  </Circle>
                </HStack>
              </Box>
            </VStack>
          </AbsoluteCenter>
        </Box>
        <Box pt={20} position={"realtive"}>
          <Separator borderColor={"blackAlpha.900"} />
          <VStack justify={"center"} mt={2}>
            <Text
              fontSize={"12px"}
              color={"#0A3981"}
              fontFamily="Prompt, sans-serif"
              fontWeight={"semibold"}
              fontStyle={"normal"}
            >
              About us | Advertisement | Careers | TERMS OF USE | Privacy Policy
              | Youth Protection Policy | Operation Policy | Rights Infringement
              Report Center | Customer Support | Open Studio | Developers | Key
              Services
            </Text>
            <Box justifyContent={"flex-end"} pt={5}>
              <Text
                fontSize={"12px"}
                color={"#0A3981"}
                fontFamily="Prompt, sans-serif"
                fontWeight={"600"}
                fontStyle={"normal"}
              >
                Copyright © 2024 JaoJeePhotoshop
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default _Register;
