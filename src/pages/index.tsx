import { Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Chakra UI Icons || Home</title>
        <meta name="description" content="Create and share your icons with more speed and simplicity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading fontSize='7xl'>HELLO WORLD</Heading>
      <Text>Project generated with ❤️ by Futhememe boilerplate generator</Text>
    </Container>
  )
}

export default Home
