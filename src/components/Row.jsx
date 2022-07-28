import React from "react";
import {  HStack, PinInput, PinInputField } from "@chakra-ui/react";
// import ReactCardFlip from 'react-card-flip';

export default function Row({ guess, currentGuess }) {

  if (guess) {
    return (
        <HStack py="0.25em">
          {guess.map((l, i) => (
            <PinInput size="lg" defaultValue={l.key}>
              <PinInputField key={i} bg={l.color} color="white" fontSize={'24px'}/>
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
          {[...Array(7 - letters.length)].map((_, i) => (
            <PinInput size="lg" defaultValue="     ">
              <PinInputField key={i} />
            </PinInput>
          ))}
      </HStack>
    )
  }

  return (
      <HStack py="0.25em">
        <PinInput size="lg" defaultValue="       " fontSize={'24px'}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
  );
}
