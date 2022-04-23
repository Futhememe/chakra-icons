import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'white', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      minHeight={'100vh'}
      h='100vh'
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
