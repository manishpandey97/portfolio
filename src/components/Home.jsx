import { Box, Heading, Image, Spacer, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DevImage from '../images/aa.webp';
import { useTypewriter } from './useTypewriter';

function About() {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);

    const typewriterText = useTypewriter(' Full Stack Developer proficient in MERN stack ', 30);
    const typewriterText1 = useTypewriter(' With strong skills in frontend and backend development ', 100);

    // Trigger typewriter effects sequentially
    useEffect(() => {
        setShowFirst(true);
        const timer = setTimeout(() => {
            setShowSecond(true);
        }, 2000); // Adjust timing as needed for delay between texts

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Box bg="gray.100" display="flex" justifyContent="center" alignItems="center"
                width={{ base: '100vw', md: '60vw' }}
                flexDirection="column" p={4}>
                <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} color="teal.500"
                    mt={{ base: 20, md: 10, lg: 20 }} textAlign="center" borderBottom="2px solid teal">
                    Hello, I'm Manish Pandey
                </Heading>

                {showFirst && (
                    <Text mt={4} fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} color="gray.600" fontWeight="bold"
                        letterSpacing="wider" textAlign="center"  px={2} pb={1}
                        wordBreak='wrap'
                        animation="blinkCursor 1s step-end infinite">
                        {typewriterText || ''}
                    </Text>
                )}

                {showSecond && (
                    <Text mt={[1,2,4]} fontSize={{ base: 'lg', md: 'xl', lg: 'xl' }} color="teal.500" 
                    fontWeight={{ base: "midbold", md: "bold", lg: "bold" }}
                        letterSpacing="wider" textAlign="center"  px={2} pb={1} 
                        animation="blinkCursor 1s step-end infinite"  >
                        {typewriterText1 || ''}
                    </Text>
                )}
            </Box>

            {/* <Spacer /> */}

            <Box width={{ base: '98vw', md: '30vw' }} height={{ base: '45vh', md: '60vh' }}
                mt={{ base: 0, md: 0, lg: 20 }}  mb={{ base: 5, md: 10, lg: 20 }}>
                <Image src={DevImage} alt="developer" width="100%" height="100%" objectFit="contain"
                    borderRadius={{ base: 'sm', md: 'md', lg: "lg" }} />
            </Box>
        </>
    );
}

export default About;
