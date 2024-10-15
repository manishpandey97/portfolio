import { Box, Button, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleResumeDownload = () => {
        // This will trigger the download of the resume
        const link = document.createElement('a');
        link.href = '/path-to-your-resume.pdf'; // Replace with the actual path to your resume
        link.download = 'Manish_Pandey_Resume.pdf';
        link.click();
    }
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Flex w="100%" py={4} px={4} align="center" position="fixed" top={0} bg="white" zIndex={1000} boxShadow="sm"
            flexDirection={{ base: 'column', md: 'row' }}>
            <Flex w="100%" justify={{ base: 'space-between', md: 'flext-end' }} align="center">
                <Heading fontSize={['xl', 'lg', '2xl']} float={["right","left"]} pl={[2, 4, 6]}>Manish Pandey</Heading>

                <IconButton aria-label="Menu" icon={<HamburgerIcon />}
                    display={{ base: 'flex', md: 'none' }} onClick={toggleMenu} />
            </Flex>
            <Spacer />
            <Box
                display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={["flex-end","center"]}
                justifyContent="center"
                w={{ base: '100%', md: 'auto' }}
                mt={{ base: 4, md: 0 }}
            >
                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                    onClick={() => {scrollToSection('main');toggleMenu();}}  width={'fit-content'}>Home</Button>
                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                    onClick={() => {scrollToSection('about');toggleMenu();}}  width={'fit-content'}>About</Button>
                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                   onClick={() => {scrollToSection('skills');toggleMenu();}}  width={'fit-content'}>Skills</Button>
                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                    onClick={() => {scrollToSection('projects');toggleMenu();}}  width={'fit-content'}>Projects</Button>
                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                    onClick={() => {scrollToSection('statistics');toggleMenu();}}  width={'fit-content'}>Statistics</Button>
                <Button variant="link" mr={[2, 1, 6]}
                    color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                    onClick={() => {scrollToSection('more');toggleMenu();}}  width={'fit-content'}>More</Button>
                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2} pr={[0,2]}
                    onClick={() => {scrollToSection('contact');toggleMenu();}}  width={'fit-content'}>Contact</Button>

                <Button variant="link" mr={[2, 1, 6]} color="teal.700" fontSize={['md', 'lg', 'xl']}
                    fontWeight={['semibold', 'semibold', 'bold']}  p={2}
                    border="2px solid" borderColor="teal.700" borderRadius="md"  pt={1} pb={1} mt={[2,1]}
                    _hover={{ bg: 'teal.700', color: 'white', textDecoration: 'none' }}
                    _focus={{ outline: 'none', boxShadow: '0 0 0 3px teal.300' }} width={'fit-content'}
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/path-to-your-resume.pdf';
                        link.download = 'Manish_Pandey_Resume.pdf';
                        link.click();
                        toggleMenu();
                    }}>Resume</Button>
            </Box>
        </Flex>
    );
}

export default Header;