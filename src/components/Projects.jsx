import { Box, Heading, SimpleGrid, Text, useBreakpointValue, Flex, Icon, Badge, Image } from '@chakra-ui/react';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa'; // Ensure these imports are added
import React from 'react';
import BlueflyLap from '../images/blueflyhome.png';
import Blueflytablet from '../images/blueflyhome_tablet.png';
import BlueflyMobile from '../images/blueflyhome_mobile.png';
import Lululemonlap from '../images/lululemon_laptop.png';
import Lululemontab from '../images/lululemon_tablet.png';
import Lululemonmob from '../images/lululemon_mobile.png';
import Adminlap from '../images/admin_lap.png';
import Admintab from '../images/admin_tablet.png';
import AdminMob from '../images/admin_mobile.png';

function Projects() {
    const bluelyImg = useBreakpointValue({
        base: BlueflyMobile,
        md: Blueflytablet,
        lg: BlueflyLap
    });
    const luluImg = useBreakpointValue({
        base: Lululemonmob,
        md: Lululemontab,
        lg: Lululemonlap
    });
    const adminImg = useBreakpointValue({
        base: AdminMob,
        md: Admintab,
        lg: Adminlap
    });
    const projectList = [
        {
            title: 'Bluefly',
            description: `I developed and deployed a full-stack web application using the MERN stack, enhancing project 
            scope and user interactions. I designed and implemented RESTful APIs with Node.js and Express.js, 
            facilitating efficient server-side processing. Additionally, I created and optimized MongoDB database models 
            and queries, significantly improving data retrieval speeds. On the frontend, I built and maintained 
            responsive components with React.js, ensuring seamless and intuitive user interactions.`,
            techStack: `JavaScript | React | Redux | Git | Node.js | Express.js | MongoDB |  
                        RESTful APIs | HTML5 | CSS3 | Responsive Web Design`,
            liveLink: 'https://meek-pavlova-b4e4d3.netlify.app/', // Add actual link here
            githubLink: 'https://github.com/manishpandey97/bluefly_be', // Add actual link here
            image: bluelyImg
        },
        {
            title: 'Lululemon',
            description: `I developed key functionalities such as user registration, authentication,
            product browsing, and order placement using ReactJS, while implementing a responsive front-end with Chakra 
            UI to ensure a visually appealing and intuitive user experience across devices. Additionally, I conducted 
            thorough testing and debugging to deliver a stable and reliable online shopping application.`,
            techStack: `JavaScript | Redux | Git | React | HTML5 | CSS3 | Responsive Web Design`,
            liveLink: 'https://66ec1679c5371d9fc94edf41--stalwart-starship-c6f59c.netlify.app/', // Add actual link here
            githubLink: 'https://github.com/manishpandey97/lululemon_fe', // Add actual link here
            image: luluImg
        },
        {
            title: 'Administrator',
            description: `I designed and developed a fully responsive admin panel using HTML5 and 
            CSS3 to ensure compatibility across various devices, and leveraged React.js for efficient data management. 
            I implemented CRUD functionalities (Create, Read, Update, Delete) to effectively handle business data 
            operations and ensured seamless navigation and user experience by utilizing React Router for dynamic 
            routing.`,
            techStack: `JavaScript | HTML5 | CSS3 | React | Git | Responsive Web Design`,
            liveLink: 'https://euphonious-sorbet-db9860.netlify.app/', // Add actual link here
            githubLink: 'https://github.com/manishpandey97/Administrator', // Add actual link here
            image: adminImg
        },
    ];

    return (
        <Box m={2} mb={8} width="100%" mt={[20, 5, 20]}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                color="teal.600"
                borderBottom="2px solid teal"
                m={'auto'} width='fit-content' mb={4}>
                Projects
            </Heading>
            {/* <SimpleGrid row={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={4}> */}
            {projectList.map((project, index) => (
                <Box
                    key={index}
                    mt={10}
                    mb={10}
                    p={2}
                    bg="white"
                    shadow="md"
                    borderWidth="1px"
                    borderRadius="md"
                    transition="transform 0.2s"
                    _hover={{ transform: 'scale(1.05)', shadow: 'lg' }} // Hover effect
                >
                    <Box
                        // width={{ base: '85vw', md: '80vw', lg: '90vw' }}
                        // height={{ base: '50vh', md: '40vh', lg: '70vh' }}
                        margin={'auto'}
                        mt={{ base: 2, md: 10, lg: 2 }}
                        mb={{ base: 2, md: 10, lg: 5 }}
                        // border={'1px solid red'}
                        overflow={'hidden'} // Ensures content does not overflow out of the box
                        borderRadius={{ base: 'sm', md: 'md', lg: "lg" }} // Rounded corners for an attractive design
                    >
                        <Image
                            src={project.image}
                            alt="developer"
                            width="95%"
                            height="100%"
                            objectFit="contain" // Ensures the image covers the entire box
                            borderRadius={{ base: 'sm', md: 'md', lg: "lg" }} // Sync border radius for uniformity
                        />
                    </Box>


                    <Flex
                        align="center"
                        justify="center"
                        direction="row"
                        textAlign="justify"
                    >


                        <Heading
                            fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
                            color="teal.700"
                            px={2}
                            pb={1}
                            width="fit-content"
                        >
                            {project.title}
                        </Heading>
                        <Icon
                            as={FaExternalLinkSquareAlt}
                            ml={2}
                            cursor="pointer"
                            onClick={() => window.open(project.liveLink, '_blank')}
                        />
                        <Icon
                            as={FaGithub}
                            ml={2}
                            cursor="pointer"
                            onClick={() => window.open(project.githubLink, '_blank')}
                        />
                    </Flex>



                    <Text
                        mt={2}
                        fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
                        textAlign="justify"
                        px={2}
                        pb={1}
                        // width="fit-content"
                        fontWeight="semibold"
                    >
                        <Badge fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}> Tech Stack: </Badge>
                        <Badge fontSize={['md', 'lg', 'lg']} whiteSpace="normal" overflowWrap="break-word" >
                            {project.techStack}
                        </Badge>


                    </Text>
                    <Text
                        mt={1}
                        fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}
                        textAlign="justify"
                        px={2}
                        pb={1}
                        fontWeight="semibold"
                        width="fit-content"
                    >
                        <Badge fontSize={{ base: 'md', md: 'lg', lg: 'lg' }}>
                            Description:</Badge>  {project.description}
                    </Text>
                </Box>
            ))}
            {/* </SimpleGrid> */}
        </Box>
    );
}

export default Projects;
