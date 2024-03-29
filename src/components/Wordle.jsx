import React, { useLayoutEffect, useState } from "react";
import {
  Center,
  Container,
  Divider,
  Stack,
  VStack,
} from "@chakra-ui/react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import GameOver from "./GameOver";
import Hint from "./Hint";

export default function Worlde({ solution, hint }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, formatGuess, addNewGuess } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [hints, showHints] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      // setTimeout(() => setShowModal(true), 2000);
      setShowModal(true);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5) {
      // setTimeout(() => setShowModal(true), 2000);
      setShowModal(true);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 3 && isCorrect === false) {
      showHints(true);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]); //passing dependencies so it changes in the change of event

  return (
    <Center py="3em" bg="#00C9C8" overflowX={"hidden"}>
      <Container maxW="container.xl">
        <VStack>
          {/* <Heading> Solution - {solution}</Heading> */}
          <Stack direction={{ base: "column", md: "column", lg: "row" }} w="100%">
            <VStack w={{base: '100%', md: '100%', lg: '30%'}}

            >
              {hints && <Hint hint={hint} />}
            </VStack>
            <VStack w={{base: '100%', md: '100%', lg: '40%'}} pt="2em">
              <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} formatGuess={formatGuess} addNewGuess={addNewGuess} />
            </VStack>
            <VStack w={{base: '100%', md: '100%', lg: '30%'}}
            >
              {showModal && (
                <GameOver
                  isCorrect={isCorrect}
                  turn={turn}
                  solution={solution}
                />
              )}
            </VStack>
          </Stack>
          <Divider />
          <Keypad usedKeys={usedKeys} />
        </VStack>
      </Container>
    </Center>
  );
}
