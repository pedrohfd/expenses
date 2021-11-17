import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AppStackParamList } from '../RootStackParams'
import { Button, ButtonText, Container, Subtitle, Title } from './styles'

type appStackParams = StackNavigationProp<AppStackParamList>

export function SetupAccount() {
  const navigation = useNavigation<appStackParams>()

  return (
    <Container>
      <StatusBar style='dark' />

      <Title>Vamos configurar sua conta!</Title>

      <Subtitle>
        A conta pode ser seu banco, cartão de crédito ou sua carteira.
      </Subtitle>

      <Button onPress={() => navigation.navigate('AddNewAccount')}>
        <ButtonText>Vamos</ButtonText>
      </Button>
    </Container>
  )
}
