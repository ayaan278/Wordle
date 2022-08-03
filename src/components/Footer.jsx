import { Heading, Link, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <HStack w="100%" bg="black" color="#00C9C8">
      <HStack w={{ base: "60%", md: "40%", lg: "60%" }}>
        <Heading fontSize={{ base: "xs", md: "xs", lg: "sm" }} pl="2em">
          {" "}
          Created with &hearts; by Ayaan Ahmad
        </Heading>
      </HStack>
      <Spacer/>
      <HStack w={{ base: "40%", md: "40%", lg: "40%" }} gap="1em" px={{ base: "1em", md: "2em", lg: "5em" }} py="1em" justifyContent={'end'}>
        <Link href="https://www.instagram.com/_.ayaanii._/">
          <span size="md" class="inline-block h-12 w-12 ring-white">
            <FaInstagram style={{ fontSize: "30px" }} />
          </span>
        </Link>
        <Link href="https://github.com/ayaan278">
          <span size="md" class="inline-block h-12 w-12 ring-white">
            <FaGithub style={{ fontSize: "30px" }} />
          </span>
        </Link>
        <Link href="https://www.linkedin.com/in/ayaan-ahmad-06545614a">
          <span size="md" class="inline-block h-12 w-12 ring-white">
            <FaLinkedin style={{ fontSize: "30px" }} />
          </span>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Footer;
