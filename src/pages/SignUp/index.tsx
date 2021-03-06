import React, { useState, useContext } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/core'

import { Header } from '../../components/Header'
import { AuthStackParamList } from '../RootStackParams'
import {
  Container,
  EmailInput,
  NameInput,
  PasswordInput,
  PasswordInputArea,
  PrivacyArea,
  PrivacyCheckbox,
  PrivacyBlackText,
  ShowButton,
  ShowIcon,
  PrivacyPurpleText,
  SignUpButton,
  SignUpButtonText,
  ComplementText,
  SignUpGoogleButton,
  SignUpGoogleButtonText,
  GoogleIcon,
  LoginText,
  LoginPageButton,
  LoginPageButtonText,
  LoginTextArea,
  PrivacyPurpleButton,
  PrivacyButtonArea,
  PrivacyUpperButtonArea,
} from './styles'
import { colors } from '../../styles/colors'
import { AuthContext } from '../../context/auth'

type authScreenProp = StackNavigationProp<AuthStackParamList>

export function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const navigation = useNavigation<authScreenProp>()
  const { signUp, signUpWithGoogle } = useContext(AuthContext)
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

  function handlePasswordShown() {
    setIsPasswordShown(!isPasswordShown)
  }

  function handleToggleCheckbox() {
    setIsCheckboxChecked(!isCheckboxChecked)
  }

  async function handleSignUp() {
    let user = { email, password, name, uid: '', pin: '', accountType: '' }

    if (name && email && password && isCheckboxChecked) {
      await signUp(user)
    }
  }

  async function handleSignUpWithGoogle() {
    await signUpWithGoogle()
  }

  return (
    <Container>
      <Header
        title='Cadastro'
        color={colors.light_100}
        textColor={colors.dark_50}
      />

      <NameInput placeholder='Nome' onChangeText={text => setName(text)} />

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

      <PrivacyArea>
        <PrivacyCheckbox
          value={isCheckboxChecked}
          onValueChange={handleToggleCheckbox}
        />

        <PrivacyButtonArea>
          <PrivacyUpperButtonArea>
            <PrivacyBlackText>
              Por se registrar, voc?? concorda com os{' '}
            </PrivacyBlackText>
            <PrivacyPurpleButton
              onPress={() => navigation.navigate('PrivacyAndPolice')}
            >
              <PrivacyPurpleText>Termos de servi??o </PrivacyPurpleText>
            </PrivacyPurpleButton>

            <PrivacyPurpleText>e</PrivacyPurpleText>
          </PrivacyUpperButtonArea>

          <PrivacyPurpleButton
            onPress={() => navigation.navigate('PrivacyAndPolice')}
          >
            <PrivacyPurpleText>Pol??tica de Privacidade</PrivacyPurpleText>
          </PrivacyPurpleButton>
        </PrivacyButtonArea>
      </PrivacyArea>

      <SignUpButton onPress={handleSignUp}>
        <SignUpButtonText>Cadastrar</SignUpButtonText>
      </SignUpButton>

      <ComplementText>Ou com</ComplementText>

      <SignUpGoogleButton onPress={handleSignUpWithGoogle}>
        <GoogleIcon />

        <SignUpGoogleButtonText>Cadastrar com Google</SignUpGoogleButtonText>
      </SignUpGoogleButton>

      <LoginTextArea>
        <LoginText>J?? possui uma conta? </LoginText>
        <LoginPageButton onPress={() => navigation.navigate('Login')}>
          <LoginPageButtonText>Login</LoginPageButtonText>
        </LoginPageButton>
      </LoginTextArea>
    </Container>
  )
}
