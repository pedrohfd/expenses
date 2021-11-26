import React, { useState } from 'react'
import { ExpenseIncome } from '../../components/ExpenseIncome'
import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import { Container, Title, Expense, ExpenseValue, ExpenseArea } from './styles'

export function Expenses() {
  const [value, setValue] = useState('0')

  return (
    <Container>
      <Header
        color={colors.red_100}
        textColor={colors.light_100}
        title='Despesas'
      />

      <Title>Quanto custa?</Title>

      <ExpenseArea>
        <Expense>R$</Expense>
        <ExpenseValue
          value={value}
          onChangeText={text => setValue(text)}
          keyboardType='numeric'
          defaultValue={value}
        />
      </ExpenseArea>

      <ExpenseIncome />
    </Container>
  )
}
