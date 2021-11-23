import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ExpenseIncome } from '../../components/ExpenseIncome'
import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { Container, Title, Income } from './styles'

export function Incomes() {
  return (
    <Container>
      {/* <StatusBar style='light' backgroundColor={colors.green_100} translucent /> */}
      <Header
        title='Receita'
        color={colors.green_100}
        textColor={colors.light_100}
      />

      <Title>Quanto custou?</Title>

      <Income>R$ 0</Income>

      <ExpenseIncome />
    </Container>
  )
}
