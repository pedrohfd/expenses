import React, { useState, useContext } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import BB from '../../assets/bank/BB.svg'
import Bradesco from '../../assets/bank/Bradesco.svg'
import C6 from '../../assets/bank/C6.svg'
import Caixa from '../../assets/bank/Caixa.svg'
import Inter from '../../assets/bank/Inter.svg'
import Itau from '../../assets/bank/Itau.svg'
import Nubank from '../../assets/bank/Nubank.svg'
import Santander from '../../assets/bank/Santander.svg'
import {
  PickerArea,
  Balance,
  BottomArea,
  Container,
  NameInput,
  Title,
  Button,
  ButtonText,
  BankTypeArea,
  BankTypeTitle,
  BankButtonArea,
  BankButton,
  BankName,
  NameArea,
} from './styles'
import fonts from '../../styles/fonts'
import { AuthContext } from '../../context/auth'
import { AppStackParamList } from '../RootStackParams'

type appScreenProp = StackNavigationProp<AppStackParamList>

export function AddNewAccount() {
  const [name, setName] = useState('')
  const [bankSelected, setBankSelected] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string>('')
  const [bbButtonPressed, setBBButtonPressed] = useState(false)
  const [bradescoButtonPressed, setBradescoButtonPressed] = useState(false)
  const [c6ButtonPressed, setC6ButtonPressed] = useState(false)
  const [caixaButtonPressed, setCaixaButtonPressed] = useState(false)
  const [interButtonPressed, setInterButtonPressed] = useState(false)
  const [itauButtonPressed, setItauButtonPressed] = useState(false)
  const [nubankButtonPressed, setNubankButtonPressed] = useState(false)
  const [santanderButtonPressed, setSantanderButtonPressed] = useState(false)
  const { saveAccountType } = useContext(AuthContext)
  const navigation = useNavigation<appScreenProp>()

  function handleBankSelected(bank: string) {
    setBankSelected(bank)
  }

  function handleContinue() {
    if (selectedType === 'banco') {
      if (bankSelected !== null) {
        saveAccountType(bankSelected)
        navigation.navigate('Success')
      }
    } else if (selectedType !== '') {
      if (name !== '') {
        saveAccountType(selectedType)
        navigation.navigate('Success')
      }
    }
  }

  return (
    <Container>
      <Header
        title='Adicionar nova conta'
        color={colors.violet_100}
        textColor={colors.light_100}
      />

      <Title bankType={selectedType}>Balanço</Title>

      <Balance>$00.0</Balance>

      <BottomArea>
        <NameArea>
          {selectedType === 'banco' ? (
            <BankName>{bankSelected}</BankName>
          ) : (
            <NameInput
              placeholder='Nome'
              onChangeText={text => setName(text)}
            />
          )}
        </NameArea>

        <PickerArea>
          <Picker
            style={{
              height: 56,
              fontFamily: fonts.medium,
              color: colors.light_20,
            }}
            mode={'dropdown'}
            selectedValue={selectedType}
            onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
          >
            <Picker.Item label='Tipo de conta' />
            <Picker.Item label='Banco' value='banco' />
            <Picker.Item label='Cartão de Crédito' value='cartão' />
            <Picker.Item label='Carteira' value='carteira' />
          </Picker>
        </PickerArea>

        {selectedType === 'banco' ? (
          <BankTypeArea>
            <BankTypeTitle>Banco</BankTypeTitle>

            <BankButtonArea>
              <BankButton
                pressed={bbButtonPressed}
                onPress={() => {
                  handleBankSelected('Banco do Brasil')
                  setBBButtonPressed(!bbButtonPressed)
                }}
                style={{ marginRight: 8, marginBottom: 8 }}
              >
                <BB width={24} height={24} />
              </BankButton>
              <BankButton
                pressed={bradescoButtonPressed}
                onPress={() => {
                  handleBankSelected('Bradesco')
                  setBradescoButtonPressed(!bradescoButtonPressed)
                }}
                style={{ marginRight: 8 }}
              >
                <Bradesco width={24} height={24} />
              </BankButton>
              <BankButton
                pressed={c6ButtonPressed}
                onPress={() => {
                  handleBankSelected('C6 Bank')
                  setC6ButtonPressed(!c6ButtonPressed)
                }}
                style={{ marginRight: 8 }}
              >
                <C6 width={52} height={52} />
              </BankButton>
              <BankButton
                pressed={caixaButtonPressed}
                onPress={() => {
                  handleBankSelected('Caixa Econômica')
                  setCaixaButtonPressed(!caixaButtonPressed)
                }}
              >
                <Caixa width={52} height={52} />
              </BankButton>
              <BankButton
                pressed={interButtonPressed}
                onPress={() => {
                  handleBankSelected('Banco Inter')
                  setInterButtonPressed(!interButtonPressed)
                }}
                style={{ marginRight: 8 }}
              >
                <Inter width={52} height={52} />
              </BankButton>
              <BankButton
                pressed={itauButtonPressed}
                onPress={() => {
                  handleBankSelected('Itau')
                  setItauButtonPressed(!itauButtonPressed)
                }}
                style={{ marginRight: 8 }}
              >
                <Itau width={24} height={24} />
              </BankButton>
              <BankButton
                pressed={nubankButtonPressed}
                onPress={() => {
                  handleBankSelected('Nubank')
                  setNubankButtonPressed(!nubankButtonPressed)
                }}
                style={{ marginRight: 8 }}
              >
                <Nubank width={24} height={24} />
              </BankButton>
              <BankButton
                pressed={santanderButtonPressed}
                onPress={() => {
                  handleBankSelected('Santander')
                  setSantanderButtonPressed(!santanderButtonPressed)
                }}
              >
                <Santander width={24} height={24} />
              </BankButton>
            </BankButtonArea>
          </BankTypeArea>
        ) : (
          <></>
        )}

        <Button onPress={handleContinue}>
          <ButtonText>Continue</ButtonText>
        </Button>
      </BottomArea>
    </Container>
  )
}
