import React from "react";
import { HStack, VStack, Heading ,Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Divider,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor, Button, Link, PopoverFooter} from "@chakra-ui/react";
  import { FaQuestion } from "react-icons/fa";
  import { GiBinoculars} from "react-icons/gi";
const Header = () => {
  return (
    <HStack p="1em" bg="#000000" color="#00C9C8">
     
      <VStack w={{base: '60%', md: '50%', lg: '70%'}}>
        <Heading textAlign={'center'}>Wordle</Heading>
      </VStack>
      <HStack w={{base: '40%', md: '50%', lg: '30%'}} justifyContent={'end'}>
        <span size='md'>
          <Popover>
            <PopoverTrigger>
              <Button color={'#00C9C8'} bg="black" size='lg' borderRadius={'50%'} >
                <FaQuestion/>
              </Button>
            </PopoverTrigger>
            <PopoverContent color={'black'}>
              <PopoverArrow />
              <PopoverCloseButton fontSize="22px" m="0.2em"/>
              <PopoverHeader fontSize="26px">How to Play?</PopoverHeader>
              <PopoverBody fontSize="18px"  textAlign="center">
                Guess the Word in 6 tries.<br></br>
                Each guess must be a 7-letter word. Hit the enter button to submit after completing the word.<br></br>
                After each guess, the color of the tiles will change to show how close your guess was to the word.
                <Divider/>
                The Green color tiles show the letter to be at right spot.<br></br>
                The Yellow color tiles show the letter is present in the word but it is not placed at correct spot.<br></br>
                The Gray color tiles show the letter is not present in the word.
              </PopoverBody>
              <PopoverFooter fontSize="18px"  textAlign="center">
                There are a hints provide for each word that'll only appear after 4th failed attempts.<br></br>
                Good Luck and Have fun.<br></br>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </span>
        <span size='lg' >
          <Popover>
            <PopoverTrigger>
              <Button color={'#00C9C8'} bg="black" size='lg' borderRadius={'50%'} >
                <GiBinoculars/>
              </Button>
            </PopoverTrigger>
            <PopoverContent color={'black'}>
              <PopoverArrow />
              <PopoverCloseButton fontSize="22px" m="0.2em"/>
              <PopoverHeader fontSize="26px">Inspired by</PopoverHeader>
              <PopoverBody fontSize="18px" textAlign="center">
                This Seven Letters Wordle Game is the Clone of the Official Wordle game, 
                which is developed by Welsh software engineer Josh Wardle, and owned and published by The New York Times Company since 2022.
                <Divider/>
                The link to the game is<Link href="https://www.nytimes.com/games/wordle/index.html"> here</Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </span>
      </HStack>
    </HStack>
  );
};

export default Header;
