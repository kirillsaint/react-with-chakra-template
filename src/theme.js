import { extendTheme } from '@chakra-ui/react'
import './theme.css';

const theme = extendTheme({
  fonts: {
    heading: 'Jost, sans-serif',
    body: 'Jost, sans-serif',
  },
})

export default theme