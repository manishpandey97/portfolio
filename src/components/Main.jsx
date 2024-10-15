import { Box, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React from 'react'
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Statistics from './Statistics';
import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';
// import Education from './Education';
import More from './More';


function Main() {
    // Responsive font sizes using Chakra UI's useBreakpointValue hook
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '4xl', lg: '5xl' });
    const subHeadingFontSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });


    return (
        <>
            <Box id="main" minHeight="100vh" bg="gray.100" display="flex" flexFlow="row wrap" 
            justifyContent="center" 
            alignItems={["flex-start","center"]}  >
                <Home />
            </Box>


            <Box id="about" minHeight="100vh" bg="gray.200" display="flex" 
            justifyContent={["center","flex-start","center"]}
            alignItems={["center","flex-start","center"]}  >
                <About />
            </Box>


            <Box id="skills" minHeight="100vh" bg="gray.300" display="flex" justifyContent="center" alignItems="center">
                <Skills />
            </Box>

            <Box id="projects" minHeigh="100vh" bg="gray.400" display="flex" justifyContent="center" alignItems="center"
                px={{ base: 4, md: 6 }} >
                <Projects />
            </Box>

            <Box id="statistics" minHeight="100vh" bg="gray.500" display="flex" justifyContent="center" alignItems="center">
                <Statistics />
            </Box>

            <Box id="more"  minHeight="100vh"  bg="gray.600" display="flex" justifyContent="center" alignItems="center">
                <More />
            </Box>

            <Box id="contact" minHeight="100vh" bg="gray.700" display="flex" justifyContent="center" alignItems="center">
                <Contact />
            </Box>
        </>
    );
}

export default Main;