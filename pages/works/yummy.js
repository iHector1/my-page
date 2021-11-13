import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Yummy">
            <Title>
                Yummy<Badge>2020</Badge>
            </Title>
            <P>
            It is a totally free website that will be oriented to the Mexican public who like cooking or who want to teach themselves to cook, with the ease of being able to upload a recipe and have the modules to follow people, download recipes, save recipes, rate it (Only to be able to link the recipe it has to be on YouTube). It is worth mentioning that if you do not have an account you can only search the recipes and see them.

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://yummy-b4d83.web.app/home">https://yummy-b4d83.web.app/home<ExternalLinkIcon mx="2px" /></Link>
                </ListItem>
                <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android.</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Angular, Bootstrap, Firebase.</span>
        </ListItem>
            </List>
            <WorkImage src="/images/yummy_1.png" alt="Yummy" />
            <WorkImage src="/images/yummy_2.png" alt="Yummy"/>
        </Layout>
    )
}

export default Work