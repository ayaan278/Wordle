import React, { useEffect, useState } from "react";
import {
  Center,
  Container,
  Divider,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import GameOver from "./GameOver";
import Hint from "./Hint";

export default function Worlde({ solution, hint }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [hints, showHints] = useState(false);

  useEffect(() => {
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
      <Container>
        <VStack>
          {/* <Heading> Solution - {solution}</Heading> */}
          <Stack direction={{ base: "column", md: "column", lg: "row" }}>
            <VStack
              pos={{ base: "static", md: "absolute", lg: "absolute" }}
              top="200"
              left={{ base: "0", md: "40", lg: "50" }}
            >
              {hints && <Hint hint={hint} />}
            </VStack>
            <VStack w="100%">
              <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            </VStack>
            <VStack
              pos={{ base: "static", md: "static", lg: "absolute" }}
              top="120"
              right="50"
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
