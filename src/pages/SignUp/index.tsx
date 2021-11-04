import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
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

type authScreenProp = NativeStackNavigationProp<AuthStackParamList>

export function SignUp() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)
  const navigation = useNavigation<authScreenProp>()

  function handlePasswordShown() {
    setIsPasswordShown(!isPasswordShown)
  }

  function handleToggleCheckbox() {
    setIsCheckboxChecked(!isCheckboxChecked)
  }

  return (
    <Container>
      <Header title='Cadastro' color={colors.light_100} />

      <NameInput placeholder='Nome' />

      <EmailInput placeholder='Email' />

      <PasswordInputArea>
        <PasswordInput placeholder='Senha' secureTextEntry={!isPasswordShown} />

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
              Por se registrar, você concorda com os{' '}
            </PrivacyBlackText>
            <PrivacyPurpleButton
              onPress={() => navigation.navigate('PrivacyAndPolice')}
            >
              <PrivacyPurpleText>Termos de serviço </PrivacyPurpleText>
            </PrivacyPurpleButton>

            <PrivacyPurpleText>e</PrivacyPurpleText>
          </PrivacyUpperButtonArea>

          <PrivacyPurpleButton
            onPress={() => navigation.navigate('PrivacyAndPolice')}
          >
            <PrivacyPurpleText>Política de Privacidade</PrivacyPurpleText>
          </PrivacyPurpleButton>
        </PrivacyButtonArea>
      </PrivacyArea>

      <SignUpButton>
        <SignUpButtonText>Cadastrar</SignUpButtonText>
      </SignUpButton>

      <ComplementText>Ou com</ComplementText>

      <SignUpGoogleButton>
        <GoogleIcon />

        <SignUpGoogleButtonText>Cadastrar com Google</SignUpGoogleButtonText>
      </SignUpGoogleButton>

      <LoginTextArea>
        <LoginText>Já possui uma conta? </LoginText>
        <LoginPageButton onPress={() => navigation.navigate('Login')}>
          <LoginPageButtonText>Login</LoginPageButtonText>
        </LoginPageButton>
      </LoginTextArea>
    </Container>
  )
}
