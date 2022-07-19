import React from "react";
import { HStack, VStack, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack p="1em" bg="#000000" color="white">
      <VStack w="30%"></VStack>
      <VStack w="40%">
        <Heading>Wordle Clone</Heading>
      </VStack>
      <VStack w="30%"></VStack>
    </HStack>
  );
};

export default Header;
