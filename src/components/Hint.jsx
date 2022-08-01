import React from 'react'
import { Container, VStack, Heading, Divider } from '@chakra-ui/react'

const Hint = ({hint}) => {
  return (
    <Container py="1em" w="400px">
        <VStack boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Heading fontSize="28px" fontWeight={'600'}>
                Hint
            </Heading>
            <Divider orientation='horizontal' />
            <Heading fontSize="26px" fontWeight={'500'}>
                {hint}
            </Heading>
        </VStack>
    </Container>
  )
}

export default Hint