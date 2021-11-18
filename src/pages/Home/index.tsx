import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { LineChart } from 'react-native-chart-kit'
import { useMotiPressable } from '@motify/interactions'
import { MotiView } from '@motify/components'

import ExpensesIcon from '../../assets/icons/expenses.svg'
import IncomeIcon from '../../assets/icons/income.svg'
import ArrowDownIcon from '../../assets/icons/purple-arrow-down-2.svg'
import NotificationIcon from '../../assets/icons/notification.svg'
import {
  AnimatedButton,
  Avatar,
  Balance,
  BalanceTitle,
  ChartArea,
  ChartFilterButton,
  ChartFilterButtonArea,
  ChartFilterButtonText,
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
  const week = 90
  const today = 0

  function ChartButton() {
    return (
      <AnimatedButton
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 2000,
        }}
      >
        <ChartFilterButtonText>Hoje</ChartFilterButtonText>
      </AnimatedButton>
    )
  }

  function Item() {
    const state = useMotiPressable(({ pressed }) => {
      'worklet'

      return {
        opacity: pressed ? 0 : 1,
      }
    })

    return (
      <MotiView state={state} style={{ backgroundColor: '#000', height: 10 }} />
    )
  }

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
          width={Dimensions.get('window').width + 21}
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
          fromZero
          withHorizontalLines={false}
          withVerticalLines={false}
          withHorizontalLabels={false}
          withVerticalLabels={false}
          withDots={true}
          bezier
        />
      </ChartArea>

      <ChartFilterButtonArea>
        <MotiView
          style={{
            height: 34,
            width: 90,
            backgroundColor: colors.yellow_20,
            position: 'absolute',
          }}
          from={{
            translateX: 0,
          }}
          animate={{
            translateX: 100,
          }}
        />
        <ChartFilterButton>
          <ChartFilterButtonText>Hoje</ChartFilterButtonText>
        </ChartFilterButton>

        <ChartFilterButton>
          <ChartFilterButtonText>Semana</ChartFilterButtonText>
        </ChartFilterButton>
      </ChartFilterButtonArea>
    </Container>
  )
}
