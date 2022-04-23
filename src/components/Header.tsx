import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react'

export const Header = () => {
  const  [isLargerThan720] = useMediaQuery('(min-width: 720px)');
  const router = useRouter();

  return (
    <Flex 
      w='100%'
      position='sticky'
      top='0'
      bgColor={'white'}
      padding='1rem 24px'
      borderBottom='1px solid #718096'
      alignItems='center'
      justifyContent='space-between'
    >
      <Flex cursor='pointer' onClick={() => router.push('/')}>
        <Text 
          fontWeight={'700'}
        >
          Chakra Icons
        </Text>
      </Flex>

      {isLargerThan720 && (
        <Flex>
          <Text cursor='pointer'>Github</Text>
        </Flex>
      )}
    </Flex>
  )
}