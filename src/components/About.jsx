import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Passport from '../images/passportPhoto.jpg';
import { useTypewriter } from './useTypewriter';

function About() {
    const typewriterText3 = useTypewriter(` Dynamic Full stack web developer proficient in MERN stack, 
        with experience in building solo projects. 
        Strong skills in frontend and backend development,
        focused on delivering efficient, scalable solutions. Excellent
        problem-solving and communication abilities, ready to
        contribute to innovative web development initiatives.`, 20);

    const typewriterText4 = useTypewriter(` I am currently pursuing a Full Stack Web Development course at Masai School, 
            expected to be completed in 2024. Prior to this, I earned my M.Tech degree from the 
            Indian Institute of Technology (BHU), Varanasi, in 2023 with a CGPA of 9.17. In 2019, I completed my B.Tech 
            from Maulana Azad National Institute of Technology (NIT-Bhopal) with a CGPA of 7.74.`, 20);

    // Helper function to render bold text
    const renderTextWithBold = (text) => {
        const phrasesToBold = [
            'Full Stack Web Development',
            'Masai School',
            'M.Tech',
            'Indian Institute of Technology (BHU), Varanasi',
            'B.Tech',
            'Maulana Azad National Institute of Technology (NIT-Bhopal)',
        ];

        let parts = [text];

        phrasesToBold.forEach((phrase) => {
            let newParts = [];
            parts.forEach((part) => {
                if (typeof part === 'string' && part.includes(phrase)) {
                    const splitParts = part.split(phrase);
                    newParts.push(splitParts[0], <Text as="span" fontWeight="bold">{phrase}</Text>, splitParts[1]);
                } else {
                    newParts.push(part);
                }
            });
            parts = newParts;
        });

        return parts;
    };

    return (
        <Box
            display={{ base: 'block', md: 'flex' }}
            // justifyContent="center"
            // alignItems="center"
            justifyContent={["center","flex-start","center"]}
            alignItems={["center","flex-start","center"]}
            flexDirection={{ base: 'column', md: 'row' }}
            padding={4}
            bg="gray.200"
            mt={[20,2,1]}
        >
            <Box
                width={{ base: '80%', md: '35vw' }}
                height={{ base: 'auto', md: '70vh' }}
                mb={{ base: 6, md: 0 }}
                mx="auto"
                display="flex"
                justifyContent="center"
            >
                <Image
                    src={Passport}
                    alt="developer"
                    width={{ base: '100%', md: '100%' }}
                    height={{ base: 'auto', md: '100%' }}
                    objectFit="contain"
                    borderRadius={{ base: 'sm', md: 'md', lg: 'lg' }}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={{ base: '100%', md: '60vw' }}
                flexDirection="column"
                p={4}
                textAlign={{ base: 'center', md: 'left' }}
            >
                <Heading
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    color="teal.500"
                    borderBottom="2px solid teal"
                    m={4}
                >
                    Professional Summary
                </Heading>
                <Text
                    mt={2}
                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    color="gray.600"
                    textAlign="justify"
                    px={2}
                    pb={1}
                    width="fit-content"
                    fontWeight="semibold"
                    animation="blinkCursor 1s step-end infinite"
                >
                    {typewriterText3}
                </Text>

                <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    color="teal.500"
                    mt={6}
                    borderBottom="2px solid teal"
                    textAlign="center"
                >
                    Academic Profile
                </Heading>
                <Text
                    mt={2}
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    color="gray.600"
                    textAlign="justify"
                    px={2}
                    pb={1}
                    width="fit-content"
                    animation="blinkCursor 1s step-end infinite"
                >
                    {renderTextWithBold(typewriterText4)}
                </Text>
            </Box>
        </Box>
    );
}

export default About;
