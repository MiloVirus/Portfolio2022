import { Box, Card, Image, Text, Flex, CardBody, Heading, Stack, Tag } from '@chakra-ui/react'
import React from 'react'
import crud from '../img/crud.jpg'
import ecommerce from '../img/ecommerce-app.jpg'
import restaurant from '../img/restaurant-app.jpg'
import dashboard from '../img/digimonlist.jpg'

const Projects = () => {
  return (
    <>
                <Box w={["90%","90%","90%","60%","40%"]} m={"auto"} marginTop={10} textAlign={["center","center","left", "left"]}>
                    <Box>
                        <Text fontSize={25} fontWeight={600}>
                            Ecommerce App
                        </Text>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            marginTop={4}
                            variant='outline'
                            _hover={{boxShadow:" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}
                            transitionDuration={"0.6ms"}
                            >
                            <a href="https://milovirus.github.io/Ecommerce-App/">
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '340px' }}
                                src={ecommerce}
                                alt='Caffe Latte'
                                p={4}
                            />
                            </a>

                            <Stack>
                                <CardBody>
                                <Text fontSize={18}>
                                    <Flex>
                                        The objective of this project was to create an Ecommerce application to fulfill 
                                        the needs of the client. In this case a Keyboard store. 
                                        <br/>The website provides users the ability to Register and Login into the created accounts where they can check and buy products. 
                                    </Flex>
                                    <Tag m={1}>JavaScript</Tag>
                                    <Tag m={1}>React JS</Tag>
                                    <Tag m={1}>Chakra UI</Tag>
                                    <Tag m={1}>Node JS</Tag>
                                    <Tag m={1}>Mongo DB</Tag>
                                    <Tag m={1}>Express</Tag>
                                </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Box>
                    <Box marginTop={5}>
                        <Text fontSize={25} fontWeight={600}>
                            Restaurant App
                        </Text>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            marginTop={4}
                            variant='outline'
                            _hover={{boxShadow:" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}
                            transitionDuration={"0.6ms"}
                            >
                           <a href="https://milovirus.github.io/Restaurant-React-App/">
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '340px' }}
                                src={restaurant}
                                alt='Caffe Latte'
                                p={4}
                            />
                            </a>
                            <Stack>
                                <CardBody>
                                <Text fontSize={18}>
                                    <Flex>
                                        In this project I deployed a Restaurant App that has access to a Manager Panel where the Admin can add, delete or edit
                                        menus
                                        <br/>The website provides the Manager a Login where they can manage the Menu. 
                                    </Flex>
                                    <Tag m={1}>JavaScript</Tag>
                                    <Tag m={1}>React JS</Tag>
                                    <Tag m={1}>Bootstrap 5</Tag>
                                    <Tag m={1}>Firebase</Tag>
                                </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Box>
                    <Box marginTop={5}>
                        <Text fontSize={25} fontWeight={600}>
                            CRUD App
                        </Text>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            marginTop={4}
                            variant='outline'
                            _hover={{boxShadow:" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}
                            transitionDuration={"0.6ms"}
                            >
                            <a href="https://milovirus.github.io/Proyecto-CRUD-Ucamp/">
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '340px' }}
                                src={crud}
                                alt='Caffe Latte'
                                p={4}
                            />
                            </a>

                            <Stack>
                                <CardBody>
                                <Text fontSize={18}>
                                    <Flex>
                                        The main idea of the project was to create a CRUD Application that could store data in the Local Storage. The app can Add new players
                                        to the player base, delete, edit them, and set them active or unactive.
                                    </Flex>
                                    <Tag m={1}>JavaScript</Tag>
                                    <Tag m={1}>Bootstrap 5</Tag>
                                    <Tag m={1}>CSS</Tag>
                                    <Tag m={1}>HTML</Tag>
                                </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Box>
                    <Box marginTop={5}>
                        <Text fontSize={25} fontWeight={600}>
                            Dashboard App
                        </Text>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            marginTop={4}
                            variant='outline'
                            _hover={{boxShadow:" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}
                            transitionDuration={"0.6ms"}
                            >
                            <a href="https://milovirus.github.io/DigimonListDex/">
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '340px' }}
                                src={dashboard}
                                alt='Caffe Latte'
                                p={4}
                            />
                            </a>
                            <Stack>
                                <CardBody>
                                <Text fontSize={18}>
                                    <Flex>
                                        In this Dashboard app I made use of the Digimon API to display data of the digimons. Chart JS was used to visualize the sorting of the Digimon levels through a graph.
                                    </Flex>
                                    <Tag m={1}>JavaScript</Tag>
                                    <Tag m={1}>Bootstrap 5</Tag>
                                    <Tag m={1}>CSS</Tag>
                                    <Tag m={1}>HTML</Tag>
                                    <Tag m={1}>Async JS</Tag>
                                    <Tag m={1}>Chart JS</Tag>
                                </Text>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Box>
                    
                    
    </Box>
    </>
  )
}

export default Projects