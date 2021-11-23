import React, { useState } from 'react'
import { Dimensions, StatusBar } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

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
  ChartFilterMonthButtonText,
  ChartFilterTodayButtonText,
  ChartFilterWeekButtonText,
  ChartFilterYearButtonText,
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
  TransactionButtonFilter,
  TransactionButtonFilterText,
  TransactionTitle,
  TransactionTitleArea,
} from './styles'
import { colors } from '../../styles/colors'
import { TransactionCardItem } from '../../components/TransactionCardItem'

const todayLabels = ['12:00', '']

const todayData = [150, 50, 30, 100]

const weekLabels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

const weekData = [30, 100, 23, 65, 56, 100, 21]

const monthData = [
  150, 50, 30, 100, 23, 65, 56, 100, 21, 23, 54, 47, 56, 126, 127, 92, 82, 53,
  26, 36, 16, 35, 52, 62, 94, 13, 63, 92, 16, 36,
]

const yearLabels = ['Jan', 'Mar', 'Mai', 'Jul', 'Set', 'Nov']

const yearData = [150, 50, 30, 100, 23, 65, 56, 100, 21, 23, 54, 47]

let data = todayData

let labels = todayLabels

export function Home() {
  const [from, setFrom] = useState(16)
  const [animate, setAnimate] = useState(16)
  const [buttonPressed, setButtonPressed] = useState({
    today: true,
    week: false,
    month: false,
    year: false,
  })

  const today = 16
  const week = 110
  const month = 206
  const year = 300

  function handleSelectedChart(animate: number) {
    setFrom(animate)
    setAnimate(animate)
  }

  return (
    <Container>
      <StatusBar barStyle='dark-content' backgroundColor='#fff6e5' />
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
            labels: labels,
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
            alignItems: 'center',
            justifyContent: 'center',
          }}
          fromZero
          withHorizontalLines={false}
          withHorizontalLabels={false}
          withDots={true}
          bezier
        />
      </ChartArea>

      <ChartFilterButtonArea>
        <AnimatedButton
          from={{
            translateX: from,
          }}
          animate={{
            translateX: animate,
          }}
        />
        <ChartFilterButton
          onPress={() => {
            data = todayData
            labels = todayLabels
            handleSelectedChart(today)
            setButtonPressed({
              today: true,
              week: false,
              month: false,
              year: false,
            })
          }}
        >
          <ChartFilterTodayButtonText pressed={buttonPressed.today}>
            Hoje
          </ChartFilterTodayButtonText>
        </ChartFilterButton>

        <ChartFilterButton
          onPress={() => {
            data = weekData
            labels = weekLabels
            handleSelectedChart(week)
            setButtonPressed({
              today: false,
              week: true,
              month: false,
              year: false,
            })
          }}
        >
          <ChartFilterWeekButtonText pressed={buttonPressed.week}>
            Semana
          </ChartFilterWeekButtonText>
        </ChartFilterButton>

        <ChartFilterButton
          onPress={() => {
            data = monthData
            handleSelectedChart(month)
            setButtonPressed({
              today: false,
              week: false,
              month: true,
              year: false,
            })
          }}
        >
          <ChartFilterMonthButtonText pressed={buttonPressed.month}>
            Mês
          </ChartFilterMonthButtonText>
        </ChartFilterButton>

        <ChartFilterButton
          onPress={() => {
            data = yearData
            labels = yearLabels
            handleSelectedChart(year)
            setButtonPressed({
              today: false,
              week: false,
              month: false,
              year: true,
            })
          }}
        >
          <ChartFilterYearButtonText pressed={buttonPressed.year}>
            Ano
          </ChartFilterYearButtonText>
        </ChartFilterButton>
      </ChartFilterButtonArea>

      <TransactionTitleArea>
        <TransactionTitle>Transações Recentes</TransactionTitle>
        <TransactionButtonFilter>
          <TransactionButtonFilterText>Veja tudo</TransactionButtonFilterText>
        </TransactionButtonFilter>
      </TransactionTitleArea>

      <TransactionCardItem />
      <TransactionCardItem />
    </Container>
  )
}
