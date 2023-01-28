import React from "react";
import { useState, useEffect} from "react";
import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import avatars from "../img/avataaars.png"


const NavBar = (props) => {
  const [onSwitch, setOnSwitch] = useState(false);
  

  const switchSelection = () => {
    setOnSwitch(!onSwitch);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
    } else {
      setOnSwitch(false);
    }
  };


  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Flex flexDir="column" id="mainNavBar" w="50%" m={"auto"} marginTop={10}>
      <Flex  justifyContent={'left'}>
        <Flex
          display={["none", "none", "flex", "flex"]}
          justifyContent="left"
        >
        
          <Button
            cursor={"pointer"}
            p="2"
            as="a"
            color="black"
            variant="none"
            aria-label="home"
            my={5}
            mx={2}
            w="100%"
          >
            <Image src={avatars} alt="" w={70}/>
          </Button>
          <Link to="/" relative="path">
          <Button
            cursor={"pointer"}
            p="2"
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="home"
            my={5}
            mx={2}
            w="100%"
          >
            <Text fontSize={20}>Home</Text>
          </Button></Link>
          <Link to="/projects" relative="path">
          <Button
            cursor={"pointer"}
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="about"
            my={5}
            mx={2}
            w="100%"
          >
            <Text fontSize={20}>Projects</Text>
          </Button></Link>
          <Button
            cursor={"pointer"}
            as="a"
            color="#5A5A5A"
            variant="ghost"
            aria-label="contact"
            my={5}
            mx={2}
            w="100%"
            onClick={props.operate}
          >
            <Text fontSize={20}>Contact</Text>
          </Button>
        </Flex>

        {
          // Mobile Navbar----------------------------------
        }

        <Flex display={["flex", "flex", "none", "none"]} w="100%">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={1}
            icon={<HamburgerIcon />}
            onClick={() => switchSelection()}
            alignSelf="center"
            m={2}
            position="absolute"
          ></IconButton>
          <Flex
            alignSelf="center"
            fontWeight="bold"
            justifyContent={"center"}
            w="100%"
          >
            
            <Text alignSelf="center" p={2} color="#393C44">
                <Image src={avatars} alt="" w={75}/>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        id="mobileMenu"
        flexDir="column"
        align="center"
        m="auto"
        w="100%"
        display={onSwitch ? "flex" : "none"}
      >
        <Button
          p="2"
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="home"
          my={5}
          mx={2}
          w="100%"
        >
          <Link to="/" relative="path">Home</Link>
          
        </Button>
        <Button
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="about"
          my={5}
          mx={2}
          w="100%"
        >
          <Link to="/projects" relative="path">Projects</Link>
        </Button>
        <Button
          as="a"
          color="#5A5A5A"
          variant="ghost"
          aria-label="contact"
          my={5}
          mx={2}
          w="100%"
          onClick={props.operate}
        >
          <Link to="" relative="path">Contact</Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
