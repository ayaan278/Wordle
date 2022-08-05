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
  Show, Hide
} from "@chakra-ui/react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn, formatGuess, addNewGuess }) {
  const [value, setValue] = useState("");
  const handleChange = (event) =>
  {
    setValue(event.target.value);
  }

  const handleClick = () => {
    currentGuess = value;
    const formatted = formatGuess()
    addNewGuess(formatted)
    setValue('')
  }

  return (
    <Center>
      <Container>
        <VStack pb="1em">
          {guesses.map((g, i) => {
            if (turn === i) {
              return <Row key={i} currentGuess={currentGuess} />;
            }
            return <Row key={i} guess={g} />;
          })}
        </VStack>
        <Show below='md'>
        <InputGroup >
          <Input
            fontSize={'20px'}
            value={value}
            onChange={handleChange}
            placeholder="Type your word here"
            pr="5.5rem"
            variant='outline'
            maxLength={7}
            _placeholder={{ opacity: 0.7, color: '#000000' }}
          />
          <InputRightElement width="4.6rem">
            <Button h="1.75rem" size="xs" onClick={handleClick}>
              Submit
            </Button>
          </InputRightElement>
        </InputGroup>
        </Show>
      </Container>
    </Center>
  );
}
