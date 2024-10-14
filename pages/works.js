import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbYummy from '../public/images/works/yummy.jpg'
import thumbLibrary from '../public/images/works/library.jpg'
import thumblego from '../public/images/works/lego.jpg'
import thumbTasckcli from '../public/images/works/taskcli.jpg'
import thumbRick from '../public/images/works/rickmorty.jpg'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} variant={"section-title"}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="yummy" title="Yummy" thumbnail={thumbYummy}>
            A social network about recipes food.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="library"
            title="Graphics Library"
            thumbnail={thumbLibrary}
          >
            A Java library for drawing graphics
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="lego"
            title="Lego Recognition System"
            thumbnail={thumblego}
          >
            A system that recognizes lego pieces
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4} variant={"section-title"}v>
          Old Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="taskcli" thumbnail={thumbTasckcli} title="M">
            TaskCli is a terminal program that&apos;s solve user&apos;s
            administration task.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="rick"
            thumbnail={thumbRick}
            title="Ricardo y Martin"
          >
            Rick and Morty&apos;s api client, it show all characters of the
            serie and it&apos;s characteristics and it&apos;s PWA application{' '}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
