import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppStackParamList } from '../RootStackParams'
import { Animation, Container, Title } from './styles'

type appScreenProp = StackNavigationProp<AppStackParamList>

export function Success() {
  const navigation = useNavigation<appScreenProp>()

  setTimeout(() => {
    navigation.navigate('Home')
  }, 2000)

  return (
    <Container>
      <StatusBar style='dark' />

      <Animation
        source={require('../../assets/animation/ok-animation.json')}
        autoPlay
        loop
      />
      <Title>Você está pronto!</Title>
    </Container>
  )
}
