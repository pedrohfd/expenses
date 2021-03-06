import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'

import { Header } from '../../components/Header'
import { AuthStackParamList } from '../RootStackParams'
import {
  Container,
  ContinueButton,
  ContinueButtonText,
  EmailInput,
  PrimaryText,
} from './styles'
import { useNavigation } from '@react-navigation/core'
import { colors } from '../../styles/colors'

type authScreenProp = StackNavigationProp<AuthStackParamList>

export function ForgotPassword() {
  const navigation = useNavigation<authScreenProp>()

  function sendEmail() {
    navigation.navigate('EmailSend')
  }

  return (
    <Container>
      <Header
        title='Esqueceu a Senha'
        color={colors.light_100}
        textColor={colors.dark_50}
      />

      <PrimaryText>
        Não se preocupe.{'\n'}Coloque seu email e nós iremos enviar a você um
        link para redefinir sua senha.
      </PrimaryText>

      <EmailInput placeholder='Email' />

      <ContinueButton onPress={sendEmail}>
        <ContinueButtonText>Continue</ContinueButtonText>
      </ContinueButton>
    </Container>
  )
}
