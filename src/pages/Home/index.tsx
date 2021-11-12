import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Container, Header, Text } from './styles'

export function Home() {
  return (
    <Container>
      <StatusBar style='dark' backgroundColor='#fff6e5' />
      <Header colors={['#FFF6E5', '#F8EDD800']}>
        <Text>Home</Text>
      </Header>
    </Container>
  )
}
