import { Container, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const index = () => {
  return (
      <Container>
          <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello, I'm a frontend developer based in France !
          </Box>
          <Box display={{md: "flex"}}>
              <Box flexGrow={1}>
                  <Heading as="h2" variant="page-title">
                      Lucas Legrand
                  </Heading>
                  <p>alias Pouetpouet (developer, gamer, mountains lover, burger flipper)</p>
              </Box>
          </Box>
      </Container>
  )
}

export default index