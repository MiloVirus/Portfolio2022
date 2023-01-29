import {
  Box,
  Card,
  Image,
  Text,
  Flex,
  CardBody,
  Stack,
  Tag,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import crud from '../img/crud.jpg';
import ecommerce from '../img/ecommerce-app.jpg';
import restaurant from '../img/restaurant-app.jpg';
import dashboard from '../img/digimonlist.jpg';

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const item2 = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Box
        w={['90%', '90%', '90%', '60%', '40%']}
        m={'auto'}
        marginTop={10}
        textAlign={['center', 'center', 'left', 'left']}
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <Box>
            <motion.div variants={item}>
              <Text fontSize={25} fontWeight={600}>
                Ecommerce App
              </Text>
              <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
              >
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow="hidden"
                  marginTop={4}
                  variant="outline"
                  _hover={{ boxShadow: ' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}
                  transitionDuration={'0.6ms'}
                >
                  <a href="https://milovirus.github.io/Ecommerce-App/">
                    <Image
                      objectFit="cover"
                      maxW={{ base: '100%', sm: '340px' }}
                      src={ecommerce}
                      alt="Caffe Latte"
                      p={4}
                    />
                  </a>

                  <Stack>
                    <CardBody>
                      <Text fontSize={18}>
                        <Flex>
                          The objective of this project was to create an
                          Ecommerce application to fulfill the needs of the
                          client. In this case a Keyboard store.
                          <br />
                          The website provides users the ability to Register and
                          Login into the created accounts where they can check
                          and buy products.
                        </Flex>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#FCDC00',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          JavaScript
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#98EEFC',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          React JS
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#41C7BF',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Chakra UI
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#83CD29',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Node JS
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#023430',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Mongo DB
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#323232',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Express
                        </Tag>
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </motion.div>
            </motion.div>
          </Box>

          <Box marginTop={35}>
            <motion.div variants={item2}>
              <Text fontSize={25} fontWeight={600}>
                Restaurant App
              </Text>
              <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
              >
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow="hidden"
                  marginTop={4}
                  variant="outline"
                  _hover={{ boxShadow: ' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}
                  transitionDuration={'0.6ms'}
                >
                  <a href="https://milovirus.github.io/Restaurant-React-App/">
                    <Image
                      objectFit="cover"
                      maxW={{ base: '100%', sm: '340px' }}
                      src={restaurant}
                      alt="Caffe Latte"
                      p={4}
                    />
                  </a>
                  <Stack>
                    <CardBody>
                      <Text fontSize={18}>
                        <Flex>
                          In this project I deployed a Restaurant App that has
                          access to a Manager Panel where the Admin can add,
                          delete or edit menus
                          <br />
                          The website provides the Manager a Login where they
                          can manage the Menu.
                        </Flex>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#FCDC00',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          JavaScript
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#98EEFC',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          React JS
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#7D0AF8',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Bootstrap 5
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#FFCB2B',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Firebase
                        </Tag>
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </motion.div>
            </motion.div>
          </Box>

          <motion.div variants={item}>
            <Box marginTop={35}>
              <Text fontSize={25} fontWeight={600}>
                CRUD App
              </Text>

              <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
              >
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  overflow="hidden"
                  marginTop={4}
                  variant="outline"
                  _hover={{ boxShadow: ' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}
                  transitionDuration={'0.6ms'}
                >
                  <a href="https://milovirus.github.io/Proyecto-CRUD-Ucamp/">
                    <Image
                      objectFit="cover"
                      maxW={{ base: '100%', sm: '340px' }}
                      src={crud}
                      alt="Caffe Latte"
                      p={4}
                    />
                  </a>

                  <Stack>
                    <CardBody>
                      <Text fontSize={18}>
                        <Flex>
                          The main idea of the project was to create a CRUD
                          Application that could store data in the Local
                          Storage. The app can Add new players to the player
                          base, delete, edit them, and set them active or
                          unactive.
                        </Flex>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#FCDC00',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          JavaScript
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#7D0AF8',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          Bootstrap 5
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#214CE5',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          CSS
                        </Tag>
                        <Tag
                          m={1}
                          _hover={{
                            bg: '#E44D26',
                            color: ' white',
                            cursor: 'pointer',
                          }}
                        >
                          HTML
                        </Tag>
                      </Text>
                    </CardBody>
                  </Stack>
                </Card>
              </motion.div>
            </Box>
          </motion.div>

          <motion.div variants={item2}>
          <Box marginTop={35}>
            <Text fontSize={25} fontWeight={600}>
              Dashboard App
            </Text>
            <motion.div
              whileHover={{ scale: 1.1 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
            >
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                marginTop={4}
                variant="outline"
                _hover={{ boxShadow: ' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)' }}
                transitionDuration={'0.6ms'}
              >
                <a href="https://milovirus.github.io/DigimonListDex/">
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '340px' }}
                    src={dashboard}
                    alt="Caffe Latte"
                    p={4}
                  />
                </a>
                <Stack>
                  <CardBody>
                    <Text fontSize={18}>
                      <Flex>
                        In this Dashboard app I made use of the Digimon API to
                        display data of the digimons. Chart JS was used to
                        visualize the sorting of the Digimon levels through a
                        graph.
                      </Flex>
                      <Tag
                        m={1}
                        _hover={{
                          bg: '#FCDC00',
                          color: ' white',
                          cursor: 'pointer',
                        }}
                      >
                        JavaScript
                      </Tag>
                      <Tag
                        m={1}
                        _hover={{
                          bg: '#7D0AF8',
                          color: ' white',
                          cursor: 'pointer',
                        }}
                      >
                        Bootstrap 5
                      </Tag>
                      <Tag
                        m={1}
                        _hover={{
                          bg: '#214CE5',
                          color: ' white',
                          cursor: 'pointer',
                        }}
                      >
                        CSS
                      </Tag>
                      <Tag
                        m={1}
                        _hover={{
                          bg: '#E44D26',
                          color: ' white',
                          cursor: 'pointer',
                        }}
                      >
                        HTML
                      </Tag>
                      <Tag
                        m={1}
                        _hover={{
                          bg: '#FE767A',
                          color: ' white',
                          cursor: 'pointer',
                        }}
                      >
                        Chart JS
                      </Tag>
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </motion.div>
          </Box>
          </motion.div>
        </motion.div>
      </Box>
    </>
  );
};

export default Projects;
