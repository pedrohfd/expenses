import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from '../RootStackParams'
import {
  BackButton,
  BackButtonText,
  Container,
  Illustration,
  PrimaryText,
  SecondaryText,
} from './styles'
import { useNavigation } from '@react-navigation/core'

interface EmailSendProps {
  email: string
}

type authScreenProp = NativeStackNavigationProp<RootStackParamList>

export function EmailSend({ email }: EmailSendProps) {
  const navigation = useNavigation<authScreenProp>()

  return (
    <Container>
      <Illustration
        source={{
          uri: 'https://storage.googleapis.com/carousel-image/email.png',
        }}
      />

      <PrimaryText>Seu email está a caminho</PrimaryText>

      <SecondaryText>
        Cheque seu email {email} e siga as instruções para redefinir sua senha
      </SecondaryText>

      <BackButton onPress={() => navigation.navigate('Login')}>
        <BackButtonText>Voltar para Login</BackButtonText>
      </BackButton>
    </Container>
  )
}
