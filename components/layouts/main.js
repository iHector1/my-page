import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'



const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Héctor's Homepage" />
        <meta name="author" content="Héctor González" />
        <meta name="author" content="iHector" />
        <link rel="cala" href="cala.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Héctor González" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@iHector" />
        <meta name="twitter:creator" content="@iHector" />
        <meta name="twitter:image" content="https://hector-gonzalez.vercel.app/card.png" />
        <meta property="og:site_name" content="Héctor González" />
        <meta name="og:title" content="Héctor González" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hector-gonzalez.vercel.app/card.png" />
        <title>Héctor González - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
