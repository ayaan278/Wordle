import React, { useEffect } from "react";
import { Center, Container, Heading, } from "@chakra-ui/react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

export default function Worlde({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]); //passing dependencies so it changes in the change of event

  return (
    <Center py="3em" >
      <Container>
        <Heading> Solution - {solution}</Heading>
        
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}  />
      </Container>
    </Center>
  );
}
