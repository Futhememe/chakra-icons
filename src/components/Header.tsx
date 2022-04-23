import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { colors } from '../theme'

export const Header = () => {
  const  [isLargerThan720] = useMediaQuery('(min-width: 720px)');

  return (
    <Flex 
      w='100%'
      position='sticky'
      top='0'
      bgColor={'white'}
      padding='24px'
      alignItems='center'
      justifyContent='space-between'
    >
      <Flex cursor='pointer'>
        <Text 
          fontWeight={'700'}
        >
          Chakra Icons
        </Text>
      </Flex>

      {/* {isLargerThan720 && (
        <Flex>
          <Text pr='1.25rem' cursor='pointer' >CONTACT</Text>
          <Text pr='1.25rem' cursor='pointer' >WORKS</Text>
          <Text pr='1.25rem' cursor='pointer' >SERVICES</Text>
          <Text cursor='pointer'>ABOUT</Text>
        </Flex>
      )} */}
    </Flex>
  )
}