import React, { useRef, useState } from 'react'
import { Text } from 'react-native'
import { CodeField } from 'react-native-confirmation-code-field'

import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { Container, Title } from './styles'

export function PinSetup() {
  const pinCodeRef = useRef(null)
  const [code, setCode] = useState('')

  function handleOnFullFill(code: string) {
    console.log(code)
  }

  return (
    <Container>
      <Title>Vamos configurar o seu PIN</Title>

      <CodeField
        value={code}
        onChangeText={code => setCode(code)}
        cellCount={4}
        rootStyle={{ marginTop: 20 }}
        textContentType='oneTimeCode'
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={{
              width: 40,
              height: 40,
              // lineHeight: 38,
              // fontSize: 24,
              textAlign: 'center',
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 20,
              // backgroundColor: '#fff',
            }}
          >
            {symbol}
          </Text>
        )}
      />
    </Container>
  )
}
