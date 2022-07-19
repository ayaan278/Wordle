import React, { useEffect } from 'react'
import { Center, Container, Heading} from '@chakra-ui/react'
import useWordle from '../hooks/useWordle'

export default function Worlde({solution}){
  
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(()=> {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

    return (
      <Center pt="3em">
        <Container>
          <Heading> Current guess - {currentGuess}</Heading>
        </Container>
      </Center>
  )
}
