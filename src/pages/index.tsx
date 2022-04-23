import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { colors } from '../theme'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Head>
          <title>Chakra UI Icons || Home</title>
          <meta name="description" content="Create and share your icons with more speed and simplicity" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex 
          flexDirection='column'
          pr={['2rem', '10rem']}
          pl={['2rem', '10rem']}
          alignItems='center'
          textAlign='center'
        >
          <Heading 
            fontSize={['2.5rem', '6xl']}
            color={colors.black[100]}
          >
            Create and share your icons with more <Text as='span' color={colors.green[100]}>speed and simplicity</Text>
          </Heading>
          <Text 
            color={colors.gray[100]}
            mt='1rem'
            fontSize={['md', 'lg']}
          >
            Chakra UI Icons is a project to help people to create icon packages with speed and more simplicity
          </Text>

          <Button 
            size={'lg'} 
            bgColor={colors.green[100]}
            color={'white'}
            mt='2rem'
          >
            Get Started
          </Button>
        </Flex>
      </Container>
    </>
  )
}

export default Home
