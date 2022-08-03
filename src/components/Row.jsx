import React from "react";
import {  HStack, PinInput, PinInputField } from "@chakra-ui/react";
// import ReactCardFlip from 'react-card-flip';

export default function Row({ guess, currentGuess }) {

  if (guess) {
    return (
        <HStack py="0.25em" >
          {guess.map((l, i) => (
            <PinInput size={{ base: "md", md: "md", lg: "lg" }} defaultValue={l.key.toUpperCase()} variant={'filled'} >
              <PinInputField key={i} bg={l.color} color="white" fontSize={'24px'} fontWeight={'600'}/>
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
            <PinInput size={{ base: "md", md: "md", lg: "lg" }} defaultValue={letter} variant={'filled'} >
              <PinInputField key={i} bg={letter.color} ontSize={'24px'}/>
            </PinInput>
          ))}
          {[...Array(7 - letters.length)].map((_, i) => (
            <PinInput size={{ base: "md", md: "md", lg: "lg" }} defaultValue="     " variant={'filled'}>
              <PinInputField key={i} ontSize={'24px'}/>
            </PinInput>
          ))}
      </HStack>
    )
  }

  return (
      <HStack py="0.25em">
        <PinInput size={{ base: "md", md: "md", lg: "lg" }} defaultValue="       "  variant={'filled'} >
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
