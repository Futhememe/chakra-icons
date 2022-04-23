import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { colors } from '../theme'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Container>
      <Header />
      <Head>
        <title>Chakra UI Icons || Home</title>
        <meta name="description" content="Create and share your icons with more speed and simplicity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex 
        flexDirection='column'
        h='100%'
        w='100%'
        pr={['2rem', '10rem']}
        pl={['2rem', '10rem']}
        alignItems='center'
        textAlign='center'
        justifyContent='center'
      >
        <Heading 
          fontSize={['2.5rem', '6xl']}
          color={colors.black[100]}
        >
          Create and share your icons with more <Text as='span' color={colors.greenScheme[100]}>speed and simplicity</Text>
        </Heading>
        <Text 
          color={colors.gray[100]}
          mt='1rem'
          fontSize={['md', 'lg']}
        >
          Chakra UI Icons is a project to help people to create icon packages with speed and more simplicity
        </Text>

        <Button 
          onClick={() => router.push('icons')}
          size={'lg'} 
          bgColor={colors.greenScheme[100]}
          color={'white'}
          mt='2rem'
        >
          Get Started
        </Button>
      </Flex>
    </Container>
  )
}

export default Home
