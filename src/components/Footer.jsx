import React from 'react'
import { forwardRef } from 'react'
import { Icon, Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone} from 'react-icons/ai'

const Footer = (props, ref) => {
  return (
    <Flex ref={ref} justifyContent={"center"} gap={4} w={["90%","90%","40%","40%"]} m={"auto"} marginTop={10} marginBottom={10}>
      <a href="https://www.linkedin.com/in/camilo-valencia-sandoval-234231119/">
        <Icon boxSize={6} as={AiFillLinkedin}></Icon>
      </a>
      <a href="https://github.com/MiloVirus">
        <Icon boxSize={6} as={AiFillGithub}></Icon>
      </a>
      <a href="mailto:camilovalencia.dev@gmail.com">
        <Icon boxSize={6} as={AiFillMail}></Icon>
      </a>
    </Flex>
  )
}

export default forwardRef(Footer) 