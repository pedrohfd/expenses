import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { MotiView } from '@motify/components'
import { MotiPressable } from '@motify/interactions'

import AddIcon from '../../assets/icons/add.svg'
import IncomeIcon from '../../assets/icons/incomePage.svg'
import TransferIcon from '../../assets/icons/transfer.svg'
import ExpenseIcon from '../../assets/icons/expense.svg'
import { AppStackParamList } from '../../pages/RootStackParams'
import { CenterButton, Container, Button } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native'

type appScreenProp = StackNavigationProp<AppStackParamList>

export function CustomTabBar(props: any) {
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const navigation = useNavigation<appScreenProp>()

  const startDeg = '0deg'
  const endDeg = '45deg'

  function openPage(page: any) {
    setIsButtonPressed(false)

    navigation.navigate('SpendingRoutes', { screen: page })
  }

  return (
    <Container {...props}>
      <CenterButton onPress={() => setIsButtonPressed(!isButtonPressed)}>
        <MotiView
          from={{ rotate: isButtonPressed ? startDeg : endDeg }}
          animate={{ rotate: isButtonPressed ? endDeg : startDeg }}
        >
          <AddIcon height={57} width={57} />
        </MotiView>
      </CenterButton>
      <MotiView
        style={{ position: 'absolute', zIndex: -1 }}
        animate={{
          left: isButtonPressed ? -53 : 15,
          top: isButtonPressed ? -80 : -11,
        }}
      >
        <MotiPressable onPress={() => openPage('Income')}>
          <IncomeIcon height={54} width={54} />
        </MotiPressable>
      </MotiView>
      <MotiView
        style={{ position: 'absolute', zIndex: -1 }}
        animate={{
          left: isButtonPressed ? 81 : 15,
          top: isButtonPressed ? -80 : -11,
        }}
      >
        <MotiPressable onPress={() => openPage('Expense')}>
          <ExpenseIcon height={54} width={54} />
        </MotiPressable>
      </MotiView>
      <MotiView
        style={{ position: 'absolute', zIndex: -1 }}
        animate={{
          left: 15,
          top: isButtonPressed ? -148 : -11,
        }}
      >
        <MotiPressable onPress={() => openPage('Transfer')}>
          <TransferIcon height={54} width={54} />
        </MotiPressable>
      </MotiView>
    </Container>
  )
}
