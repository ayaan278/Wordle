import React from 'react'
import RICIBs from 'react-individual-character-input-boxes';
import { Center, Container, HStack} from '@chakra-ui/react'


const Input = () => {

    const handleOutput = (string) => {

    }
    
  return (
    <Center pt="3em" bg="#303030">
        <Container>
            <HStack justifyContent={'center'}>
                <RICIBs
                amount={5}
                autoFocus
                handleOutputString={handleOutput}
                inputProps={[
                    { className: "first-box" },
                    { style: { "color": "black" } },
                    { placeholder: "" }
                ]}
                inputRegExp={/^[a-z]$/}
                />
            </HStack>
        </Container>
    </Center>
  )
}

export default Input