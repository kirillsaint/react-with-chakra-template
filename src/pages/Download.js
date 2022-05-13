import {
    Box,
    Heading,
    Button,
    SimpleGrid,
    useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../css/Download.css'

export default function Main() {
    const [releases, setReleases] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const api_url = 'https://api.github.com/repos/moegram/moegram';

    useEffect(() => {
        const loading = async () => {
            const data = await axios.get(`${api_url}/releases`)

            setReleases(data.data)
            setLoaded(true);
        }
        if(!loaded) {    
            loading()
        }
    });

    const download = (url, name) => {
        let download = document.createElement("a");
        download.href = url;
        download.download = name;
        download.style.display = "none";
        document.body.appendChild(download);
        download.click();
        document.body.removeChild(download);
    }

    const toast = useToast()

    return (
        <Box color='white' m='40px'>
            <Heading>Download</Heading>
            {!loaded && (
                <Heading>Loading...</Heading>
            )}
            {releases.map(item => {
                return (
                    <Box borderWidth='1px' borderRadius='lg' w='auto' h='auto' m='20px'>
                        <Box m='20px'>
                            <Heading size='md'>v{item.tag_name}</Heading>
                            <ReactMarkdown className='desc'>{item.body}</ReactMarkdown>
                            <SimpleGrid columns={[1, 3]} spacing='0.5rem' w='100%' mt='10px'>
                                {item.assets.map(file => {
                                    return (
                                        <Button size='md' colorScheme='blue' w='100%' onClick={() => {
                                            toast({
                                                title: 'Download started.',
                                                status: 'success',
                                                duration: 4000,
                                                isClosable: true,
                                              })
                                            setTimeout(10, download(file.browser_download_url, file.name))
                                        }}>
                                            {file.name}
                                        </Button>
                                    )
                                })}
                            </SimpleGrid>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}