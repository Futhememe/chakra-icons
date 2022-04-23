import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { 
  // PUT YOUR FONTS HERE
  body: "'Inter', sans-serif",
  heading: 'Inter'
}

export const colors = {
  // PUT YOUR COLORS HERE
  black: {
    100: '#2D3748'
  },
  green: {
    100: '#319795'
  },
  gray: {
    100: '#718096'
  }
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
})

export default theme
