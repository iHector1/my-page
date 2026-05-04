import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const skillGroups = [
  { title: 'Backend', value: 'C#, .NET, Node.js, REST APIs' },
  { title: 'Frontend', value: 'React, Angular, JavaScript' },
  { title: 'Integrations', value: 'Shopify API, OpenAI, Gemini' },
  { title: 'Databases', value: 'SQL Server, MongoDB, MySQL' },
  { title: 'Cloud/DevOps', value: 'AWS, Docker, CI/CD (GitHub Actions)' },
  { title: 'Languages', value: 'C#, JavaScript, Python, Java' }
]

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
          Backend-focused Software Developer based in Guadalajara, México.
        </Box>

        <Box display={{ md: 'flex' }} mb={8}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Héctor Josue Gonzalez Cortes
            </Heading>
            <Text>Guadalajara, Mexico · hectorjosuegc@gmail.com · +52 33 34 68 13 49</Text>
            <Text>linkedin.com/in/ihector · github.com/iHector1</Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/me.jpg"
              alt="Foto de perfil de Héctor González"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>
          <Paragraph>
            Backend-focused Software Developer with experience building scalable APIs, real-time systems, and AI-powered
            integrations. Skilled in designing full-stack solutions, automating workflows, and developing cloud-based
            applications using modern technologies.
          </Paragraph>
        </Section>

        <Section delay={0.15}>
          <Heading as="h3" variant="section-title">
            Technical Skills
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {skillGroups.map((item) => (
              <Text key={item.title}>
                <strong>{item.title}:</strong> {item.value}
              </Text>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <Box mb={4}>
            <Text fontWeight="bold">Backend Developer | Radial Llantas</Text>
            <Text fontSize="sm" color="gray.500">Nov 2024 – Present</Text>
            <List styleType="disc" pl={5} mt={2} spacing={1}>
              <ListItem>Built and maintained REST APIs for internal systems and third-party integrations.</ListItem>
              <ListItem>Integrated Shopify and AI APIs (OpenAI, Gemini), automating workflows.</ListItem>
              <ListItem>Developed Node.js services to extend backend capabilities.</ListItem>
              <ListItem>Containerized services with Docker and implemented CI/CD pipelines.</ListItem>
              <ListItem>Diagnosed and resolved production issues, improving uptime and reliability.</ListItem>
            </List>
          </Box>

          <Box mb={4}>
            <Text fontWeight="bold">Backend & Automation Developer | CETI</Text>
            <Text fontSize="sm" color="gray.500">Jan 2024 – Dec 2024</Text>
            <List styleType="disc" pl={5} mt={2} spacing={1}>
              <ListItem>Developed backend services and automation pipelines, increasing efficiency by 50%.</ListItem>
              <ListItem>Designed validation workflows improving data accuracy and reducing inconsistencies.</ListItem>
              <ListItem>Automated reporting processes, reducing manual workload and processing time.</ListItem>
            </List>
          </Box>

          <Box mb={4}>
            <Text fontWeight="bold">Technical Support Specialist | CETI</Text>
            <Text fontSize="sm" color="gray.500">Jan 2023 – Dec 2023</Text>
            <List styleType="disc" pl={5} mt={2} spacing={1}>
              <ListItem>Resolved system and network issues across Windows/Linux environments.</ListItem>
              <ListItem>Automated recurring support tasks, reducing resolution time and manual intervention.</ListItem>
            </List>
          </Box>
        </Section>

        <Section delay={0.25}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Text fontWeight="bold">Real-Time AI Learning Platform (React, Node.js, Express, WebSockets, Python)</Text>
              <Text>
                Full-stack collaborative platform with live sessions, real-time whiteboard editing, and multi-language code
                execution. Integrated AI image processing and OpenAI-based formula generation rendered as images.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">AI Lego Detection System (Python, React)</Text>
              <Text>
                Computer vision system to identify LEGO pieces from images and visualize detected components in real time.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">2D/3D Graphics Engine (Java)</Text>
              <Text>Low-level pixel rendering engine for creating 2D/3D shapes and learning rendering pipelines.</Text>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Recipe Social Platform (Angular, Firebase, Node.js)</Text>
              <Text>
                Full-stack social platform with real-time chat, live sessions, PayPal integration, ranking, and recipe
                classification.
              </Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Text fontWeight="bold">Centro de Enseñanza Técnica Industrial (CETI)</Text>
          <Text>B.S. Software Engineering · 2021 – 2024</Text>
          <Text mt={2} fontWeight="bold">Centro de Enseñanza Técnica Industrial (CETI)</Text>
          <Text>Software Development Technologist · 2017 – 2020</Text>
        </Section>

        <Section delay={0.35}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/iHector1" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @iHector1
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/ihector25" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                  @ihector25
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/ihector/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                  Héctor Josué González Cortés
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={6}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                View Portfolio Projects
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
