import {
    Box,
    Container,
    Stack,
    Heading,
    Text,
    Code,
    Button,
    ButtonGroup,
    Link,
    Center,
    Image
} from '@chakra-ui/react';
import axios from 'axios';
import { Link as RLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'

export default function Hero() {
    const [version, setVersion] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const api_url = 'https://api.github.com/repos/Moegram/Moegram';

    useEffect(() => {
        const loading = async () => {
            const data = await axios.get(`${api_url}/releases/latest`)

            setVersion(data.data.tag_name)
            setLoaded(true);
        }
        if(!loaded) {    
            loading()
        }
    });

    return (
        <Container>
            <Stack
                as={Box}
                alignItems='center'
                textAlign={'center'}
                spacing={{ base: 4 }}
                py={{ base: 20, md: 36 }}
            >
                <Center>
                    <Image src={logo} w='100px' />
                </Center>
                <Heading size='2xl'>Moegram <Code children={`v${version}`} colorScheme='blue' /></Heading>
                <Text>is a free and open source third-party Telegram client!</Text>
                <ButtonGroup size='md' w='100%'>
                    <Button colorScheme='blue' w='100%' as={RLink} to='/download'>Download</Button>
                    <Button colorScheme='blue' w='100%' as={Link} href='https://github.com/Moegram/Moegram' target='_blank'>Source Code</Button>
                </ButtonGroup>
                <ButtonGroup size='md' w='100%'>
                    <Button colorScheme='blue' w='100%' as={Link} href='https://t.me/moegram' target='_blank'>Telegram channel</Button>
                </ButtonGroup>
            </Stack>
        </Container>
    )
}