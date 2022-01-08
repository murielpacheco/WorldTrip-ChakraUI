import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      '1000': '#FFBA08'
    },
    black: {
      '1000': '#000',
    },
    gray: {
      '900': '#47585B',
      '700': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    }
  }
  ,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
})