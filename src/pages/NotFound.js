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
        <Container>
            <Stack
                as={Box}
                alignItems='center'
                textAlign={'center'}
                spacing={{ base: 8 }}
                py={{ base: 20, md: 36 }}
            >
                <Heading size='2xl'>404</Heading>
                <Button colorScheme='teal' variant='solid' as={Link} to='/'>На главную</Button>
            </Stack>
        </Container>
    )
}