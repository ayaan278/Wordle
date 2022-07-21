import React from "react";
import { Container, HStack, PinInput, PinInputField } from "@chakra-ui/react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
        <HStack py="0.25em">
          {guess.map((l, i) => (
            <PinInput size="lg" defaultValue={l.key}>
              <PinInputField key={i} bg={l.color} />
            </PinInput>
          ))}
        </HStack>
    );
  }

  if(currentGuess){

    let letters = currentGuess.split('');

    return(
      <HStack py="0.25em">
        {letters.map((letter, i) => (
            <PinInput size="lg" defaultValue={letter}>
              <PinInputField key={i} bg={letter.color} />
            </PinInput>
          ))}
          {[...Array(5 - letters.length)].map((_, i) => (
            <PinInput size="lg" defaultValue="     ">
              <PinInputField key={i} />
            </PinInput>
          ))}
      </HStack>
    )
  }

  return (
      <HStack py="0.25em">
        <PinInput size="lg" defaultValue="     ">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
  );
}
