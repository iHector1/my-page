import { Badge, List, ListItem } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
import { Title,Meta } from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
const Post = () => {
    return (
        <Layout title="Xen">
            <Title>
                Install Xen hypervisor on Debian <Badge>6/28/2023</Badge>
            </Title>
            <P>
                This is a documentation about Xen hypervisor, here you will see how to install and configurate your computer to create a NAT Networking and virtuals machines.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Linux/Debian</span>
                </ListItem>
            </List>

            <Heading as='h4' mt="14" mb="4" size='md'>
                What is Xen?
            </Heading>
            <P >
                Xen is a virtualization tool that runs under the operating system and acts as a hypervisor for it. That is, if the operating system acts as a supervisor for the programs that run on it, Xen supervises the supervisor and is therefore at a lower layer. Xen works on 32-bit and 64-bit x86 architectures. Xen also calls virtual machines domains.
            </P>
            <Heading as='h4' mt="10" mb="4" size='md'>
                Install Xen
            </Heading>
            <P >
                Make sure you have Debian or a Linux distribution that supports Xen installed. To install the Xen package insert write the following line in the terminal and vim.
            </P>

            <Code ml={5} my={2} fontSize={16}>apt install xen-system-amd64 xen-utils-common xen-tools vim</Code>

            <Heading as='h4' mt="10" mb="4" size='md'>
                Configuration
            </Heading>
            <P >

                Configure the default network architecture when creating the virtual machines. Uncomment or add the following lines to the /etc/xen/xl.conf file:
            </P>
            <Code ml={5} my={2} fontSize={16}>
                <Text as="p">
                    vif.default.script = &quot;vif-bridge&quot; <br></br>
                    vif.default.bridge = &quot;xenbr0&quot;
                </Text>

            </Code>
            <P >

                Edit /etc/network/interfaces:
            </P>
            <Code ml={5} my={2} fontSize={16}>
                <Text marginBottom="4">
                    auto enXX
                </Text>
                <Text marginBottom="4">
                    auto xenbr0
                </Text>
                <Text ml={5} marginBottom="4">
                    bridge_port enXX
                </Text>
                <Text ml={5}>
                    bridge_stp  off
                </Text>

            </Code>


        </Layout>
    )
}

export default Post