import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { LinearGradient } from 'expo-linear-gradient'

import ExpensesIcon from '../../assets/icons/expenses.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ArrowDownIcon from '../../assets/icons/purple-arrow-down-2.svg'
import NotificationIcon from '../../assets/icons/notification.svg'
import {
  Avatar,
  Balance,
  BalanceTitle,
  ChartArea,
  ChartTitle,
  Container,
  Expenses,
  ExpensesTextArea,
  ExpensesTitle,
  ExpensesValue,
  Gradient,
  HeaderItems,
  Income,
  IncomeTextArea,
  IncomeTitle,
  IncomeValue,
  MonthButton,
  MonthText,
  NotificationButton,
  Summary,
} from './styles'
import { Dimensions } from 'react-native'
import { colors } from '../../styles/colors'

const data = [
  150, 50, 30, 100, 23, 65, 56, 100, 21, 23, 54, 47, 56, 126, 127, 92, 82, 53,
  26, 36, 16,
]

export function Home() {
  return (
    <Container>
      <StatusBar style='dark' backgroundColor='#fff6e5' />
      <Gradient colors={['#FFF6E5', '#F8EDD800']}>
        <HeaderItems>
          <Avatar />

          <MonthButton>
            <ArrowDownIcon height={24} width={24} />
            <MonthText>Outubro</MonthText>
          </MonthButton>

          <NotificationButton>
            <NotificationIcon height={32} width={32} />
          </NotificationButton>
        </HeaderItems>

        <BalanceTitle>Saldo da conta</BalanceTitle>
        <Balance>R$ 9400</Balance>

        <Summary>
          <Income>
            <IncomeIcon height={48} width={48} />

            <IncomeTextArea>
              <IncomeTitle>Renda</IncomeTitle>

              <IncomeValue>$5000</IncomeValue>
            </IncomeTextArea>
          </Income>

          <Expenses>
            <ExpensesIcon height={48} width={48} />

            <ExpensesTextArea>
              <ExpensesTitle>Despesas</ExpensesTitle>

              <ExpensesValue>$1200</ExpensesValue>
            </ExpensesTextArea>
          </Expenses>
        </Summary>
      </Gradient>

      <ChartTitle>Frequência de Gastos</ChartTitle>
      <ChartArea>
        <LineChart
          height={185}
          width={Dimensions.get('window').width}
          data={{
            labels: [''],
            datasets: [
              {
                data: data,
              },
            ],
          }}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            fillShadowGradient: '#8b50ff',
            fillShadowGradientOpacity: 0.2,
            color: () => colors.violet_100,
          }}
          style={{
            paddingTop: 5,
            paddingRight: 0,
          }}
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withDots={true}
          bezier
        />
      </ChartArea>
    </Container>
  )
}
