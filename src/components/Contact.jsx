import { Box, Button, Heading, Input, Textarea, SimpleGrid, Text, Flex, Icon, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import Footer from './Footer';
import { MdAddIcCall, MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from 'emailjs-com';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false); // Track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_miwni6s', 'template_zy6gpog', formData, 'wq6jrnvTc5AjMwNSb')
            .then((response) => {
                console.log('Message sent successfully!', response.status, response.text);
                setSubmitted(true);  // Update state after successful submission
            })
            .catch((err) => {
                console.error('Failed to send message:', err);
            });
    };

    return (
        <Box width={{ base: '90%', md: '95%', lg: '60%' }} textAlign="center" mt={[20, 2, 20]}>
            <Heading color="teal.400" mb={6}>Contact</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>

                {/* Personal Details Section */}
                <Box p={4} borderWidth="1px" borderRadius="lg" bg="white" textAlign="left">
                    <Heading size="md" mb={4} color="teal.700" textAlign="center">Personal Details</Heading>

                    <Flex align="center" justify="left" direction="row" textAlign="left">
                        <Icon fontSize="xl" color="teal.700" as={MdAddIcCall} ml={1} />
                        <Text fontSize="lg" fontWeight="semibold" px={2} pb={1} width="fit-content">
                            +91 8601446708, 8383910995
                        </Text>
                    </Flex>
                    <Flex align="center" justify="left" direction="row" textAlign="left">
                        <Icon fontSize="xl" color="teal.700" as={MdEmail} ml={1} />
                        <Text mb={2} fontSize="lg" fontWeight="semibold" px={2} pb={1} width="fit-content"
                            word-wrap="break-word">
                            manishpandey.rs.che23@itbhu.ac.in
                        </Text>
                    </Flex>

                    <Flex align="center" justify="left" direction="row" textAlign="left">
                        <Icon fontSize="xl" color="teal.700" as={FaLocationDot} ml={1} />
                        <Text mb={2} fontSize="lg" fontWeight="semibold" px={2} pb={1} width="fit-content">
                            Varanasi, Uttar Pradesh India
                        </Text>
                    </Flex>

                    <Flex align="center" justify="left" direction="row" textAlign="left">
                        <Icon fontSize="xl" color="teal.700" as={FaLinkedin} ml={1} />
                        <Text fontSize="lg" fontWeight="semibold" width="fit-content">
                            <Link mb={2} px={2} pb={1} href="https://www.linkedin.com/in/manish-pandey-195593320" isExternal
                                color="blue.400" >manish-pandey-195593320</Link>
                        </Text>
                    </Flex>

                    <Flex align="center" justify="left" direction="row" textAlign="left">
                        <Icon fontSize="xl" color="teal.700" as={FaGithub} ml={1} />
                        <Text fontSize="lg" fontWeight="semibold" width="fit-content">
                            <Link mb={2} px={2} pb={1} href="https://github.com/manishpandey97" isExternal
                                color="blue.400" >manishpandey97</Link>

                        </Text>
                    </Flex>


                </Box>

               {/* Contact Me Section */}
               <Box p={4} borderWidth="1px" borderRadius="lg" bg="white">
                    <Heading size="md" mb={4} color="teal.700">Connect Me</Heading>
                    
                    {submitted ? (  // Check if the form has been submitted
                        <Text fontSize="lg" color="teal.700" textAlign="center">
                            Thank you for your message! I'll get back to you soon.
                        </Text>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <Input 
                                placeholder="Your Name" 
                                mb={3} 
                                bg="gray.100" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                            <Input 
                                placeholder="Your Email" 
                                mb={3} 
                                bg="gray.100" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                            <Textarea 
                                placeholder="Your Message" 
                                mb={3} 
                                bg="gray.100" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                            />
                            <Button type="submit" colorScheme="teal" width="full">Send Message</Button>
                        </form>
                    )}
                </Box>
            </SimpleGrid>

            <Footer />
        </Box>
    );
}

export default Contact;
