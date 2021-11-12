import React from 'react'
import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import {
  Container,
  ContinueButton,
  ContinueButtonText,
  PasswordConfirmInput,
  PasswordInput,
} from './styles'

export function ResetPassword() {
  return (
    <Container>
      <Header
        title='Redefinir Senha'
        color={colors.light_100}
        textColor={colors.dark_50}
      />

      <PasswordInput placeholder='Nova senha' />

      <PasswordConfirmInput placeholder='Confirme sua senha' />

      <ContinueButton>
        <ContinueButtonText>Continue</ContinueButtonText>
      </ContinueButton>
    </Container>
  )
}
