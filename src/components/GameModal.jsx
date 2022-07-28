import React, { useDisclosure} from "react";
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
//   ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function GameModal ({ isCorrect, turn, solution }) {
  const { isOpen, onOpen} = useDisclosure();


  return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>

    <Modal isOpen={isOpen} >
      <ModalOverlay />
      {isCorrect && (
        <ModalContent>
          <ModalHeader>You Win!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>The correct solution was {solution}</Heading>
            <Heading>You solved the game {turn} guesses</Heading>
          </ModalBody>
        </ModalContent>
      )}
      {!isCorrect && (
        <ModalContent>
          <ModalHeader>You Lose!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>The correct solution was {solution}</Heading>
            <Heading>You are out of guesses</Heading>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
    </>
  );
};
