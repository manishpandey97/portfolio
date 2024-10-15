import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react'

function Resume() {
    return (
        <Box p={8}>
            <Heading size="lg">Resume of Manish Pandey</Heading>
            <Text mt={4}>[Add your resume content here or embed the PDF]</Text>
        </Box>
    );
}

export default Resume;