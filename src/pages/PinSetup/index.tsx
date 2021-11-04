import React, { useRef, useState } from 'react'
import CodeInput from 'react-native-confirmation-code-input'

import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { Container, Title } from './styles'

export function PinSetup() {
  const pinCodeRef = useRef(null)
  const [onFullFill, setOnFullFill] = useState('')

  function handleOnFullFill(code: string) {}

  return (
    <Container>
      <Title>Vamos configurar o seu PIN</Title>

      <CodeInput
        ref={pinCodeRef}
        onFulfill={(code: string) => handleOnFullFill(code)}
        className='border-circle'
        cellBorderWidth={4}
        activeColor='#fff'
        codeInputStyle={{ backgroundColor: '#000', color: '#ddd' }}
      />
    </Container>
  )
}
