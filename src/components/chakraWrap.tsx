import { ReactComponent } from '../utils/types'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'light'
    }
})

export const ChakraWrap: ReactComponent = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  )
}
