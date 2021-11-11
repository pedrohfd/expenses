import React, { useRef, useState, useContext } from 'react'
import { LogBox } from 'react-native'
import PincodeInput from 'react-native-pincode-input'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ArrowLeft from '../../assets/icons/white-arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import { colors } from '../../styles/colors'
import { Button, ButtonArea, ButtonText, Container, Title } from './styles'
import { AppStackParamList } from '../RootStackParams'
import { AuthContext } from '../../context/auth'

type appScreenProp = NativeStackNavigationProp<AppStackParamList>

LogBox.ignoreAllLogs()

export function PinSetup() {
  const [code, setCode] = useState('')
  const [pinFilled, setPinFilled] = useState(false)
  var pinRef = useRef(null)
  const navigation = useNavigation<appScreenProp>()
  const { setPin } = useContext(AuthContext)

  async function writeUserData() {
    try {
      if (pinFilled) {
        setPin(code)

        navigation.navigate('PinConfirmation')
      } else {
        pinRef.shake()
        setCode('')
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
      <Title>Vamos configurar o seu PIN</Title>

      <PincodeInput
        ref={(pincodeInput: any) => (pinRef = pincodeInput)}
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
            setPinFilled(false)
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
