import { Badge, List, ListItem, Box } from "@chakra-ui/react";
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Rick">
            <Title>
                TaskCli<Badge>2022</Badge>
            </Title>
            <P>
                It&apos;s a terminal program that provide user&apos;s administration task, the user will administrate his activities, he can create activities, delete activities, update activities and edit activities, this application is conected to a database in mongoDB.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, mongoDB, terminal.</span>
                </ListItem>
            </List>
            <Box
                as='iframe'
                src='https://www.youtube.com/embed/A3_Ucg9y1UI'
                width='100%'
                sx={{
                    aspectRatio: '16/9'
                }}
            />
        </Layout>
    )
}

export default Work