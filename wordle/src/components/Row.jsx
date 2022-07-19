import React from "react";
import {
  Container,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function Row() {
  return (
    <Container>
      <HStack>
        <VStack></VStack>
        <VStack></VStack>
        <VStack></VStack>
        <VStack></VStack>
        <VStack></VStack>
      </HStack>
    </Container>
  );
}
