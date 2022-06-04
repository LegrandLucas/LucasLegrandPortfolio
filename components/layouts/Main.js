import React from 'react'
import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
        <Head>
    <meta name="viewport" content="width=device-width, initial-sacle=1"></meta>
     <title>Lucas Legrand - Homepage</title>   
        </Head>
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
  )
}

export default Main