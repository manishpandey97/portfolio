import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: '#FF6B6B',
        secondary: '#FFE66D',
    },
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Poppins, sans-serif',
    },
});

export default theme;
