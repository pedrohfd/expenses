import React from 'react'
import { StatusBar } from 'react-native'
import { ExpenseIncome } from '../../components/ExpenseIncome'
import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { Container, Title, Expense } from './styles'

export function Expenses() {
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={colors.red_100} />

      <Header
        color={colors.red_100}
        textColor={colors.light_100}
        title='Despesas'
      />

      <Title>Quanto custa?</Title>

      <Expense>R$ 0</Expense>

      <ExpenseIncome />
    </Container>
  )
}
