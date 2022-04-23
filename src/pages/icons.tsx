import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Header } from '../components/Header'

const Icons: NextPage = () => {
  return (
    <Container>
      <Header />
      <Head>
        <title>Chakra UI Icons || Icons</title>
        <meta name="description" content="Create and share your icons with more speed and simplicity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex 
        flexDirection='column'
        h='100%'
        w='100%'
        p='1rem 2rem'
      >
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab>Select icons</Tab>
            <Tab>Costumize names</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              Icons
            </TabPanel>
            <TabPanel>
              Icon name
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  )
}

export default Icons
