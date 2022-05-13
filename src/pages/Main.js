import {
    Box,
    Container,
    Stack,
    Heading,
    Text
} from '@chakra-ui/react';

export default function Main() {
    return (
        <Container>
            <Stack
                as={Box}
                alignItems='center'
                textAlign={'center'}
                spacing={{ base: 8 }}
                py={{ base: 20, md: 36 }}
            >
                <Heading size='2xl'>react with chakra template</Heading>
                <Text>by @kirillsaint</Text>
            </Stack>
        </Container>
    )
}