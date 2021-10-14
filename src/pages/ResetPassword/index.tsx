import React from 'react'
import { Header } from '../../components/Header'
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
      <Header title='Redefinir Senha' />

      <PasswordInput placeholder='Nova senha' />

      <PasswordConfirmInput placeholder='Confirme sua senha' />

      <ContinueButton>
        <ContinueButtonText>Continue</ContinueButtonText>
      </ContinueButton>
    </Container>
  )
}
