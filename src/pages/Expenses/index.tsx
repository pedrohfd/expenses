import React from 'react'
import { ExpenseIncome } from '../../components/ExpenseIncome'
import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { Container, Title, Expense } from './styles'

export function Expenses() {
  return (
    <Container>
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
