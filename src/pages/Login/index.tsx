import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'

import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { AuthStackParamList } from '../RootStackParams'
import {
  ComplementText,
  Container,
  EmailInput,
  ForgotButton,
  ForgotButtonText,
  GoogleIcon,
  LoginButton,
  LoginButtonText,
  LoginGoogleButton,
  LoginGoogleButtonText,
  PasswordInput,
  PasswordInputArea,
  ShowButton,
  ShowIcon,
  SignUpPageButton,
  SignUpPageButtonText,
  SignUpPageText,
  SignUpPageTextArea,
} from './styles'

type authScreenProp = NativeStackNavigationProp<AuthStackParamList>

export function Login() {
  const navigation = useNavigation<authScreenProp>()
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  function handlePasswordShown() {
    setIsPasswordShown(!isPasswordShown)
  }

  return (
    <Container>
      <Header title='Login' color={colors.light_100} />

      <EmailInput placeholder='Email' />

      <PasswordInputArea>
        <PasswordInput placeholder='Senha' secureTextEntry={!isPasswordShown} />

        <ShowButton onPress={handlePasswordShown}>
          <ShowIcon />
        </ShowButton>
      </PasswordInputArea>

      <LoginButton>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>

      <ComplementText>Ou com</ComplementText>

      <LoginGoogleButton>
        <GoogleIcon />

        <LoginGoogleButtonText>Login com Google</LoginGoogleButtonText>
      </LoginGoogleButton>

      <ForgotButton onPress={() => navigation.navigate('ForgotPassword')}>
        <ForgotButtonText>Esqueceu a senha?</ForgotButtonText>
      </ForgotButton>

      <SignUpPageTextArea>
        <SignUpPageText>Não possui uma conta ainda? </SignUpPageText>
        <SignUpPageButton onPress={() => navigation.navigate('SignUp')}>
          <SignUpPageButtonText>Cadastrar</SignUpPageButtonText>
        </SignUpPageButton>
      </SignUpPageTextArea>
    </Container>
  )
}
