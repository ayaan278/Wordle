import React from "react";
import { HStack, VStack, Heading ,Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor, Button, Spacer} from "@chakra-ui/react";
  import { FaQuestion } from "react-icons/fa";
  import { GiBinoculars} from "react-icons/gi";
const Header = () => {
  return (
    <HStack p="1em" bg="#000000" color="#00C9C8">
      <VStack w="30%"></VStack>
      <VStack w="40%">
        <Heading>Wordle</Heading>
      </VStack>
      <HStack w="30%" justifyContent={'end'}>
        <span size='md' >
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
              <PopoverBody>....</PopoverBody>
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
              <PopoverBody>....</PopoverBody>
            </PopoverContent>
          </Popover>
        </span>
      </HStack>
    </HStack>
  );
};

export default Header;
