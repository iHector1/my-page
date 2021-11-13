import {Heading, SimpleGrid,Container } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbYummy from '../public/images/img_yummy.png'
import thumbRick from '../public/images/img_rick.png'
const Works = () => {
    return (
        <Container >
            <Heading as="h3" fontSize={20} mb={6} variant="section-title">Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section> 
                    <WorkGridItem id="yummy" title="Yummy" thumbnail={thumbYummy}>
                        A social media about kitchen recipies. 
                    </WorkGridItem>
                </Section>
                <Section> 
                    <WorkGridItem id="rick" title="Ricardo y Martin APP" thumbnail={thumbRick}>
                        Rick and Morty&apos;s api client, it show all characters of the serie and it&apos;s characteristics and it&apos;s PWA application
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}
export default Works;