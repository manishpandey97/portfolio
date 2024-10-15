import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { FaHtml5, FaReact, FaJs, FaPython, FaNodeJs, FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiRedux, SiExpress, SiMongodb, SiMongoose, SiChakraui, SiNetlify, SiRender } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {

    const skills = [
        { name: 'HTML', icon: FaHtml5, bg: "orange.500" },
        { name: 'CSS', icon: FaCss3Alt, bg: "blue.500" },
        { name: 'JavaScript', icon: FaJs, bg: "yellow.500" },
        { name: 'Python', icon: FaPython, bg: "yellow.500" },
        { name: 'React', icon: FaReact, bg: "teal.500" },
        { name: 'Redux', icon: SiRedux, bg: "purple.500" },
        { name: 'Node.js', icon: FaNodeJs, bg: "green.500" },
        { name: 'Express', icon: SiExpress, bg: "gray.500" },
        { name: 'MongoDB', icon: SiMongodb, bg: "green.500" },
        { name: 'Mongoose', icon: SiMongoose, bg: "red.500" },
        { name: 'Chakra UI', icon: SiChakraui, bg: "teal.500" },
        { name: 'Git', icon: FaGithub, bg: "gray.500" },
        { name: 'Vs Code', icon: VscVscode, bg: "blue.500" },
        { name: 'Netlify', icon: SiNetlify, bg: "teal.500" },
        { name: 'Render', icon: SiRender, bg: "gray.500" }
    ];

    return (
        <Box m={8} mt={[20,5,10]}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    color="teal.500"
                    borderBottom="2px solid teal"
                    m={'auto'} width='fit-content' textAlign="center" justifyContent='center'>
                Technical Skills & Tools
            </Heading>

            <SimpleGrid columns={[3, 4, 5]} spacing={10} justifyItems="center" m={10}>
                {skills.map((skill, index) => (
                    <Box
                        key={index}
                        borderRadius="full"
                        boxSize={{ base: "80px", md: "100px" }}
                        bg="gray.100"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        _hover={{ transform: 'rotate(360deg)', transition: 'all 1s ease-in-out' }}
                    >
                        <Box
                            bg={skill.bg}
                            p={4} // Padding around the icon
                            borderRadius="full"
                            color="white"
                            fontSize={{ base: '1xl', md: '3xl', lg: '4xl' }}
                        >
                            <skill.icon />
                        </Box>

                        <Text
                            position="absolute"
                            bottom="-20px"
                            textAlign="center"
                            width="100%"
                            fontSize={{ base: "xs", md: "sm" }}
                            fontWeight="bold"
                            color="teal.500"
                        >
                            {skill.name}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Skills;
