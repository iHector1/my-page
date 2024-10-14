import { Badge, List, ListItem, Box } from "@chakra-ui/react";
import { Title, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Graphics Library">
            <Title>
                GraphicsLib<Badge>2023</Badge>
            </Title>
            <P>
                GraphicsLib is a simple Java library for rendering basic 2D and 3D graphics. It was built from the ground up to offer straightforward functionality for drawing shapes, creating simple 3D objects, and performing basic transformations. This library does not rely on external APIs or advanced features like camera control, making it a lightweight solution for learning purposes or simple graphics projects.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Cross-platform (Windows/macOS/Linux)</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java (Standard Edition)</span>
                </ListItem>
                <ListItem>
                    <Meta>Features</Meta>
                    <span>
                        - 2D and 3D basic rendering<br/>
                        - Simple shapes and objects<br/>
                        - Basic transformations (translation, rotation, scaling)<br/>
                        - Built entirely in Java
                    </span>
                </ListItem>
            </List>
            <Box
                as='iframe'
                src='https://www.youtube.com/embed/eJs7bUZ-c_A'
                width='100%'
                sx={{
                    aspectRatio: '16/9'
                }}
            />
            <Box
                as='iframe'
                src='https://www.youtube.com/embed/D5jMwKWLqEI'
                width='100%'
                sx={{
                    aspectRatio: '16/9',
                    mt: 4
                }}
            />
        </Layout>
    );
}

export default Work;
