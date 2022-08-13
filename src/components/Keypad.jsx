import {
  Container,
  Heading,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Keypad({usedKeys}) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <Container py="1em">
      <Grid alignItems='center' templateColumns={{base: 'repeat(6, 1fr)', md: 'repeat(7, 1fr)', lg: 'repeat(8, 1fr)'}} justify={'center'} display={'grid'}>
        {letters &&
          letters.map((l) => {
            let color = usedKeys[l.key]
            if(!color){
              color = '#FAF8FF'
            }
            return (
              <Box
                borderRadius="md"
                align="center"
                border="1px solid black"
                m="0.25em"
                bg={color}
              >
                <Heading fontWeight='400' fontSize={{base: '18px', md: '20px', lg: '26px'}} key={l.key} m="0.25em">{l.key}</Heading>
              </Box>
            );
          })}
      </Grid>{" "}
    </Container>
  );
}
