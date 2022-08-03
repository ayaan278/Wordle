import React from "react";
import {
  Container,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Player } from '@lottiefiles/react-lottie-player';
import Confetti from '../assets/LottieFiles/Confetti.json'
import Melt from '../assets/LottieFiles/Melt.json'

export default function GameOver ({ isCorrect, turn, solution }) {

  return (
    <Container py="1em" w={{base: '300px', md: '300px', lg: '400px'}}>
      {isCorrect && (
      <VStack boxShadow='dark-lg' p='6' rounded='md' bg='white' textAlign={'center'}>
          <Heading fontSize={{base: '20px', md: '22px', lg: '28px'}} fontWeight={'600'}>
            You Win!
          </Heading>
          <Divider orientation='horizontal' />
          <Heading fontSize={{base: '18px', md: '20px', lg: '26px'}} fontWeight={'500'}>
            The correct solution was indeed {solution}.
          </Heading>
          <Player
            autoplay
            controls
            loop
            mode="normal"
            src={Confetti}
            >
          </Player>
          <Divider orientation='horizontal' />
          <Heading fontSize={{base: '18px', md: '20px', lg: '26px'}} fontWeight={'500'}>
            You solved the game in {turn} guesses.
          </Heading>
      </VStack>
      )}
      {isCorrect===false && (
        <VStack boxShadow='dark-lg' p='6' rounded='md' bg='white' textAlign={'center'}>
          <Heading fontSize={{base: '20px', md: '22px', lg: '28px'}} fontWeight={'600'}>
            You Lose!
          </Heading>
          <Divider orientation='horizontal' />
          <Heading fontSize={{base: '18px', md: '20px', lg: '26px'}} fontWeight={'500'}>
            The correct solution was {solution}.
          </Heading>
          <Player
            autoplay
            controls
            loop
            mode="normal"
            src={Melt}
            style={{ height: '300px', width: '300px' }}
            >
          </Player>
          <Divider orientation='horizontal' />
          <Heading fontSize={{base: '18px', md: '20px', lg: '26px'}} fontWeight={'500'}>
          You are out of guesses.
          </Heading>
        </VStack>
      )}
    </Container>
  );
};
