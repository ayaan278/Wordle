import React from 'react'
import { Center, Container, Heading, } from "@chakra-ui/react";
import Row from './Row';


export default function Grid ({currentGuess, guesses, turn}) {
  return (
    <Center>
        <Container>
            <Heading>
                {guesses.map((g, i) => {
                    return <Row key={i} />
                })}
            </Heading>
        </Container>
    </Center>
  )
}
