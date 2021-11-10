import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

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
import { AuthContext } from '../../context/auth'

type authScreenProp = NativeStackNavigationProp<AuthStackParamList>

export function Login() {
  const navigation = useNavigation<authScreenProp>()
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, signInWithGoogle } = useContext(AuthContext)

  function handlePasswordShown() {
    setIsPasswordShown(!isPasswordShown)
  }

  async function handleSignIn() {
    let user = { email, password }

    if (email && password) {
      await signIn(user)
    }
  }

  async function handleSignInWithGoogle() {
    await signInWithGoogle()
  }

  return (
    <Container>
      <Header title='Login' color={colors.light_100} />

      <EmailInput placeholder='Email' onChangeText={text => setEmail(text)} />

      <PasswordInputArea>
        <PasswordInput
          placeholder='Senha'
          secureTextEntry={!isPasswordShown}
          onChangeText={text => setPassword(text)}
        />

        <ShowButton onPress={handlePasswordShown}>
          <ShowIcon />
        </ShowButton>
      </PasswordInputArea>

      <LoginButton onPress={handleSignIn}>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>

      <ComplementText>Ou com</ComplementText>

      <LoginGoogleButton onPress={handleSignInWithGoogle}>
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
