import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react'

const Notfound = () => {
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text >The page you are looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} aling="center">
                <NextLink href="/">
                    <Button colorScheme="teal" >Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
export default Notfound; 