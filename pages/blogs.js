import { Heading, SimpleGrid, Container } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { PostGridItem } from '../components/grid-item'
import thumbXen from '../public/images/img_xen.jpg'

const Blog = () => {
    return (
        <Layout title="posts">
            <Container >
                <Heading as="h3" fontSize={20} mb={6} variant="section-title">Articles
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <PostGridItem id="xen" title="Xen" thumbnail={thumbXen}>
                            Install Xen hypervisor on Debian
                        </PostGridItem>
                    </Section>

                </SimpleGrid>
            </Container>

        </Layout>
    )
}
export default Blog; 