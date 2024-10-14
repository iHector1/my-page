import { Badge, List, ListItem, Box, Link } from "@chakra-ui/react";
import { Title, Meta } from '../../components/work';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title="Lego Recognition System">
            <Title>
                Lego Recognition<Badge>2024=</Badge>
            </Title>
            <P>
                This project is a Lego piece recognition system that uses AI to detect Lego pieces through an image. It is composed of a server built in Python with Firebase and Keras for training and detecting Lego pieces, along with a React Native mobile application that allows users to take photos and get the identification of the Lego piece in real time. Additionally, a React-based control panel allows users to see which Lego pieces have been identified, along with the photos taken during detection.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Source Code</Meta>
                    <Link href="https://github.com/ihector1/legoAI" isExternal>
                        Lego Recognition GitHub<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Mobile (React Native) and Web (React, Python server)</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React Native, React, Python, Keras, Firebase</span>
                </ListItem>
                <ListItem>
                    <Meta>Features</Meta>
                    <span>
                        <List styleType='disc' ml={16}>
                            <ListItem>Photo-based Lego piece identification</ListItem>
                            <ListItem>Real-time AI detection with Keras</ListItem>
                            <ListItem>Firebase for data storage</ListItem>
                            <ListItem>Control panel to view identified pieces with images</ListItem>
                            <ListItem>Mobile application for capturing photos</ListItem>
                        </List>
                    </span>
                </ListItem>
            </List>
            <Box
                as='iframe'
                src='https://www.youtube.com/embed/ZS1OC805t30'
                width='100%'
                sx={{
                    aspectRatio: '16/9'
                }}
            />
        </Layout>
    );
}

export default Work;
