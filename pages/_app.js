import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/Main"

const Webiste = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
        <Layout router={router}>
            <Component {...pageProps} key={router.route} />
        </Layout>
    </ChakraProvider>
  )
}

export default Webiste