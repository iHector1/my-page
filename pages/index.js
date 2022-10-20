import NextLink from 'next/link'
import {
    Link, Container, Heading, Box, Image
    , Button, List, ListItem, Icon, useColorModeValue
} from "@chakra-ui/react";
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'
const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
                    Hello, I&apos;m a software developer based in México 🌮
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Héctor González
                        </Heading>
                        <p>Software Engineer Incoming | Centro de Enseñanza  Técnica Industrial Student
                        </p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} aling="center">
                        <Image borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full" src="/images/me.jpg" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Hello this is Hector, I am a programmer and a Software Engineer Incoming, what I like the most is programming to see something created from scratch and feel a satisfaction at the moment of finish it, it can be said that each of my projects carries something of me.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        Born in Guadalajara Jalisco.
                    </BioSection>
                    <BioSection >
                        <BioYear>2020</BioYear>
                        Finished my career in software development at Centro de Enseñanza Tecnica Industrial
                    </BioSection>
                    <BioSection >
                        <BioYear>2021</BioYear>
                        Started my career Software Enginner at Centro de Enseñanza Tecnica Industrial
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/iHector1" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @iHector1
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://instagram.com/ihector25" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @ihector25
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/hectorjosuegonzalez" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    Héctor Josué González Cortés
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}
export default Page;