import React, { useEffect, useState } from "react";
import { Center, Container, Divider, Heading, HStack, VStack, } from "@chakra-ui/react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import GameOver from "./GameOver";
import Hint from "./Hint";

export default function Worlde({ solution, hint }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution);
  const [showModal, setShowModal] = useState(false)
  const [hints, showHints] = useState(false)

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
    if(turn > 3){
      showHints(true)
      window.removeEventListener("keyup", handleKeyup)
    }
    return () => window.removeEventListener("keyup", handleKeyup)
  }, [handleKeyup, isCorrect, turn]) //passing dependencies so it changes in the change of event

  return (
    <Center py="3em" bg="#00C9C8">
      <Container>
      {/* {showModal && <GameOver isCorrect={isCorrect} turn={turn} solution={solution} />} */}
        <VStack>
            <Heading> Solution - {solution}</Heading>
            <HStack>
              <VStack pos="absolute" top="300" left="50" >
                {hints && <Hint hint={hint} />}
              </VStack>
              <VStack >
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}  />
              </VStack>
            </HStack>
            <Divider/>
            <Keypad usedKeys={usedKeys}/>
        </VStack>
      </Container>
    </Center>
  );
}
