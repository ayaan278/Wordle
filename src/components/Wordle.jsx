import React, { useEffect, useState } from "react";
import { Center, Container, Heading, VStack, } from "@chakra-ui/react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import GameModal from "./GameModal";

export default function Worlde({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup)

    if(isCorrect){
        // setTimeout(() => setShowModal(true), 2000);
        setShowModal(true)
        window.removeEventListener("keyup", handleKeyup)
    }

    if(turn > 5){
        // setTimeout(() => setShowModal(true), 2000);
        setShowModal(true)
        window.removeEventListener("keyup", handleKeyup)
    }
    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup, isCorrect, turn]) //passing dependencies so it changes in the change of event

  return (
    <Center py="3em" >
      <Container>
      {showModal && <GameModal isCorrect={isCorrect} turn={turn} solution={solution} />}
        <VStack>
            <Heading> Solution - {solution}</Heading>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}  />
            <Keypad usedKeys={usedKeys}/>
        </VStack>
      </Container>
    </Center>
  );
}
