import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import '../components/icons/logos.css'
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
const Webside = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode='wait' initial={true}><Component {...pageProps} key={router.router} /></AnimatePresence>

            </Layout>
        </ChakraProvider>)
}
export default Webside;
