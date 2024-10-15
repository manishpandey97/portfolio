import { Box, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { FaMedal, FaLightbulb, FaUsers, FaLaptopCode, FaGlobe, FaCalendarAlt, FaClock } from 'react-icons/fa';

function More() {
    return (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center"
            width={{ base: '90%', md: '95vw',lg:'80vw' }}  mb={10} mt={[20,10,15]}>
                {/* Soft Skills & Interests */}
                <Box
                    bg="gray.50"
                    p={6}
                    borderRadius="md"
                    boxShadow="md"
                    display="flex"
                    flexDirection={{ base: 'column', md: 'column',lg:'row' }}
                    justifyContent="space-between"
                >
                    <Box>
                        <Text fontSize="2xl" fontWeight="bold"  color="teal.700"
                        width={'fit-content'} m={'auto'}  mb={3}> 
                        {/* SOFT SKILLS */}
                        Soft Skills
                        </Text>
                        <VStack align="flex-start" spacing={3}>
                            <Text fontSize="lg" fontWeight="semibold">
                                <Icon as={FaLightbulb} color="teal.500" mr={2}/> Problem Solving
                            </Text>
                            <Text fontSize="lg" fontWeight="semibold">
                                <Icon as={FaUsers} color="teal.500" mr={2}/> Teamwork
                            </Text>
                            <Text fontSize="lg" fontWeight="semibold">
                                <Icon as={FaCalendarAlt} color="teal.500" mr={2}/> Adaptability
                            </Text>
                            <Text fontSize="lg" fontWeight="semibold">
                                <Icon as={FaClock} color="teal.500" mr={2}/> Time Management
                            </Text>
                        </VStack>
                    </Box>

                    <Box mt={{ base: 6, md: 6,lg:0 }}>
                        <Text fontSize="2xl" fontWeight="bold"  color="teal.700"
                        width={'fit-content'} m={'auto'}  mb={3}>
                            {/* INTERESTS */}
                            Interests
                            </Text>
                        <VStack align="flex-start" spacing={3}>
                            <Text fontSize="lg" fontWeight="semibold">
                                <Icon as={FaGlobe} color="teal.500" mr={2}/> World Affairs
                            </Text>
                            <Text fontSize="lg" fontWeight="semibold">
                                <Icon as={FaLaptopCode} color="teal.500" mr={2}/> Web Development
                            </Text>
                        </VStack>
                    </Box>
                </Box>

                {/* Achievements */}
                <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md" textAlign="justify">
                    <Text fontSize="2xl" fontWeight="bold" mb={6} color="teal.700" textAlign="center"  >
                         Achievenents
                    </Text>
                    <VStack align="start" mb={6} spacing={4}>
                        <Text fontSize="lg" fontWeight="semibold">
                            <Icon as={FaMedal} color="teal.500" mr={2}/> 
                            Achieved a 98 percentile in GATE 2021 and received the Post Graduate Scholarship from MHRD for outstanding academic performance.
                        </Text>
                        <Text fontSize="lg" fontWeight="semibold">
                            <Icon as={FaMedal} color="teal.500" mr={2}/> 
                            Achieved a 99 percentile in JEE 2015, securing admission to NIT Bhopal through JEE Main.
                        </Text>
                        <Text fontSize="lg" fontWeight="semibold">
                            <Icon as={FaMedal} color="teal.500" mr={2}/> 
                            Awarded District Topper by Uttar Pradesh Education Minister in 2011.
                        </Text>
                    </VStack>
                </Box>
            </SimpleGrid>
    );
}

export default More;
