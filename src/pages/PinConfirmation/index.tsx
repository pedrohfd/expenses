import React, { useRef, useState, useContext } from 'react'
import PincodeInput from 'react-native-pincode-input'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { colors } from '../../styles/colors'
import { AuthContext } from '../../context/auth'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import ArrowLeft from '../../assets/icons/white-arrow-left.svg'
import { Button, ButtonArea, ButtonText, Container, Title } from './styles'

export function PinConfirmation() {
  const [code, setCode] = useState('')
  const [pinFilled, setPinFilled] = useState(false)
  const pinRef = useRef(null)
  const { pin, savePin } = useContext(AuthContext)

  async function writeUserData() {
    try {
      if (pinFilled) {
        if (pin === code) {
          savePin()
        }
      }
    } catch (e) {
      alert(e)
    }
  }

  function handlePress(key: string) {
    if (code.length < 4) {
      setCode(code + key)
      if (code.length === 3) {
        setPinFilled(true)
      }
    }
  }

  return (
    <Container>
      <Title>Ok. Digite seu PIN novamente.</Title>

      <PincodeInput
        ref={pinRef}
        length={4}
        pin={code}
        onTextChange={handlePress}
        circleEmptyStyle={{
          borderWidth: 4,
          borderColor: colors.violet_20,
          height: 32,
          width: 32,
        }}
        circleFilledStyle={{
          height: 32,
          width: 32,
          backgroundColor: colors.light_100,
        }}
        editable={false}
      />

      <ButtonArea>
        <Button onPress={() => handlePress('1')}>
          <ButtonText> 1 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('2')}>
          <ButtonText> 2 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('3')}>
          <ButtonText> 3 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('4')}>
          <ButtonText> 4 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('5')}>
          <ButtonText> 5 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('6')}>
          <ButtonText> 6 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('7')}>
          <ButtonText> 7 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('8')}>
          <ButtonText> 8 </ButtonText>
        </Button>
        <Button onPress={() => handlePress('9')}>
          <ButtonText> 9 </ButtonText>
        </Button>

        <Button
          onPress={() => {
            setCode(code.slice(0, -1))
          }}
        >
          <ArrowLeft width={50} height={50} />
        </Button>

        <Button onPress={() => handlePress('0')}>
          <ButtonText> 0 </ButtonText>
        </Button>

        <Button onPress={writeUserData}>
          <ArrowRight width={50} height={50} />
        </Button>
      </ButtonArea>
    </Container>
  )
}
