import React, { useState } from 'react'

import { Header } from '../../components/Header'
import {
  Container,
  EmailInput,
  NameInput,
  PasswordInput,
  PasswordInputArea,
  ShowButton,
  ShowIcon,
} from './styles'

export function SignUp() {
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  function handlePasswordShown() {
    setIsPasswordShown(!isPasswordShown)
  }

  return (
    <Container>
      <Header />

      <NameInput placeholder='Name' />

      <EmailInput placeholder='Email' />

      <PasswordInputArea>
        <PasswordInput
          placeholder='Password'
          secureTextEntry={!isPasswordShown}
        />

        <ShowButton onPress={handlePasswordShown}>
          <ShowIcon />
        </ShowButton>
      </PasswordInputArea>
    </Container>
  )
}
