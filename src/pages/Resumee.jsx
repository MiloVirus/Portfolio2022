import React from 'react'
import { Card, Stack, CardBody, Heading, Image, Text, Box, Flex, color } from "@chakra-ui/react";
import educationLogo from "../img/educationLogo.png"
import utelLogo from "../img/utel_logo.png"
import usbLogo from "../img/usbLogo.png"
import { motion} from "framer-motion"

const Resumee = () => {
  return (
    <>
        <Box w={["90%","90%","40%","40%"]} m={"auto"} marginTop={10}>
            <Box>
                <Text fontSize={30} fontWeight={600}>
                    Hi, I'm Camilo Valencia
                </Text>
            </Box>
            <Box>
                <Text fontSize={16} marginTop={4}>
                    I am a Full Stack web developer, Multimedia Engineer and Computer Science enthusiast from Cali, Colombia
                </Text>
                <Text fontSize={16} marginTop={4}>
                    This is my Digital Portfolio, where I will be showcasing my projects and interests.
                </Text>
            </Box>
        </Box>
        <Box w={["90%","90%","40%","40%"]} m={"auto"} marginTop={10}>
            <Box>
                <Text fontSize={30} fontWeight={600}>
                    Skills
                </Text>
                <motion.div whileHover={{ scale: 1.1 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}>
                        
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        marginTop={4}
                        variant='outline'
                        _hover={{boxShadow:" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}
                        transitionDuration={"0.6ms"}
                        >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                            <Heading size='md'>Full Stack Web Development</Heading>

                            <Text py='2'>
                            <Flex justifyContent={"space-between"} >
                                <Box>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>HTML</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>CSS</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>JavaScript</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>React JS</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>Mongo DB</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>Node JS</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>Express</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>Chakra UI</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>Bootstrap 5</Text>
                                    <Text fontSize={16} fontWeight={400} _hover={{fontWeight:"600"}}>Git</Text>
                                </Box>
                                
                            </Flex>
                            </Text>
                            </CardBody>
                        </Stack>
                    </Card>
                </motion.div>
            </Box>
        </Box>
        <Box w={["90%","90%","40%","40%"]} m={"auto"} marginTop={10}>
            <Flex>
                <Text fontSize={30} fontWeight={600} marginRight={2}>
                        Education
                                
                </Text>
                <Image src={educationLogo} width={10}></Image>  
            </Flex>
            <Box marginTop={10}>
                <Flex gap={10} justifyContent={"space-between"}>  
                    <Flex gap={10}>
                        <Image src={utelLogo} width={20}></Image>
                        <Box>
                           <Text fontSize={20} fontWeight={600} marginRight={2}>
                                Utel - Ucamp         
                            </Text>
                            <Text fontSize={18}>
                                Fullstack Web Developing
                            </Text> 
                        </Box>
                        
                    </Flex>
                    <Text justifyContent={"flex-end"}>
                        2022
                    </Text>
                </Flex>
                <Flex gap={10} justifyContent={"space-between"} marginTop={3}>  
                    <Flex gap={10} alignItems={"center"}>
                        <Image src={usbLogo} width={20}></Image>
                        <Box>
                           <Text fontSize={20} fontWeight={600} marginRight={2}>
                                Universidad de San Buenaventura Cali        
                            </Text>
                            <Text fontSize={18}>
                                Multimedia Engineering
                            </Text> 
                        </Box>
                        
                    </Flex>
                    <Text justifyContent={"flex-end"}>
                        2010 - 2015
                    </Text>
                </Flex>
            </Box>
        </Box>
    </>
  )
}

export default Resumee