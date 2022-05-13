import {
    Box,
    Container,
    Stack,
    Heading,
    Button
} from '@chakra-ui/react';
import {
    Link
} from 'react-router-dom';

export default function NotFound() {
    return (
        <Container color='white'>
            <Stack
                as={Box}
                alignItems='center'
                textAlign={'center'}
                spacing={{ base: 8 }}
                py={{ base: 20, md: 36 }}
            >
                <Heading size='2xl'>Page not found</Heading>
                <Button w='100%' colorScheme='blue' variant='solid' as={Link} to='/'>To home</Button>
            </Stack>
        </Container>
    )
}