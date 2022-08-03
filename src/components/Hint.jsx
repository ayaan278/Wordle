import React from 'react'
import { Container, VStack, Heading, Divider } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import Confuse from '../assets/LottieFiles/Confuse.json'

const Hint = ({hint}) => {
  return (
    <Container py="1em" w={{base: '300px', md: '300px', lg: '300px'}}>
        <VStack boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Heading fontSize={{base: '20px', md: '22px', lg: '28px'}} fontWeight={'600'}>
                Hint
            </Heading>
            <Divider orientation='horizontal' />
            <Player
              autoplay
              controls
              loop
              mode="normal"
              src={Confuse}
              style={{ height: '250px', width: '300px' }}
              >
            </Player>
            <Heading fontSize={{base: '18px', md: '20px', lg: '26px'}} fontWeight={'500'} textAlign="center">
                {hint}
            </Heading>
        </VStack>
    </Container>
  )
}

export default Hint