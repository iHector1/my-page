import { Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Rick">
            <Title>
                Ricardo y Martin<Badge>2021</Badge>
            </Title>
            <P>
            It&apos;s a web page that called an external api about &quot;Rick and Morty&quot;, the web page shows all characteres that appears on the serie and shows it&quot;s characteristics. You can search characters too.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://ricardo-y-martin-app.web.app/character-details/7">https://ricardo-y-martin-app.web.app/home<ExternalLinkIcon mx="2px" /></Link>
                </ListItem>
                <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Angular, Bootstrap.</span>
        </ListItem>
            </List>
            <WorkImage src="/images/rick_1.png" alt="Yummy" />
            <WorkImage src="/images/rick_2.PNG" alt="Yummy"/>
        </Layout>
    )
}

export default Work