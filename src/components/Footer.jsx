import { Box, Text } from '@chakra-ui/react';

function Footer() {
    return (
        <Box
            textAlign="center"
            py={{ base: 4, md: 6 }}
            bg="gray.100"
            mt={10}
            mb={10}
            borderWidth="1px" 
            borderRadius={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
            <Text
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                fontWeight="semibold"
                px={{ base: 2, md: 4 }}
                pb={1}
                color="teal.900"
            >
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Text>
        </Box>
    );
}

export default Footer;
