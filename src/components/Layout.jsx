import { Box, Flex } from '@chakra-ui/react';
import React from 'react'

function Layout({ children }) {
    return (
        <Box w="100%" minH="100vh" bg="gray.100">
            <Flex direction="column" align="center" maxW="1200px" mx="auto" p={4}>
                {children}
            </Flex>
        </Box>
    );
};

export default Layout