import React, { useState } from "react";
import {
  Center,
  Container,
  Heading,
  VStack,
  Input,
  InputGroup,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn, handleKeyup }) {
  // const [value, setValue] = useState("");
  // const handleChange = (event) =>
  // {
  //   setValue(event.target.value);
  // }

  // const handleClick = () => {
  //   currentGuess = value;
  //   handleKeyup();
  // }

  return (
    <Center>
      <Container>
        <VStack>
          {guesses.map((g, i) => {
            if (turn === i) {
              return <Row key={i} currentGuess={currentGuess} />;
            }
            return <Row key={i} guess={g} />;
          })}
        </VStack>
        {/* <InputGroup>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Here is a sample placeholder"
            pr="4.5rem"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Submit
            </Button>
          </InputRightElement>
        </InputGroup> */}
      </Container>
    </Center>
  );
}
