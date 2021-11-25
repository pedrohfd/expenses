import React, { useState, useContext } from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getMonth } from 'date-fns'
import Modal from 'react-native-modal'

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
  ModalContent,
  ModalMonthButton,
  ModalMonthButtonText,
  MonthButton,
  MonthText,
  NotificationButton,
  StatusBarColor,
  Summary,
  TransactionButtonFilter,
  TransactionButtonFilterText,
  TransactionTitle,
  TransactionTitleArea,
} from './styles'
import { colors } from '../../styles/colors'
import { TransactionCardItem } from '../../components/TransactionCardItem'
import { AuthContext } from '../../context/auth'

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
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [buttonPressed, setButtonPressed] = useState({
    today: true,
    week: false,
    month: false,
    year: false,
  })

  const { user } = useContext(AuthContext)

  const totalAccountBalance = user?.balance.totalAccountBalance

  const result = getMonth(new Date())

  const insets = useSafeAreaInsets().top

  const todayChart = 16
  const weekChart = 110
  const monthChart = 206
  const yearChart = 300

  function handleSelectedChart(animate: number) {
    setFrom(animate)
    setAnimate(animate)
  }

  return (
    <>
      <StatusBarColor height={Math.round(insets)} />
      <Container>
        <Gradient colors={['#FFF6E5', '#F8EDD800']}>
          <HeaderItems>
            <Avatar />

            <MonthButton onPress={() => setIsModalVisible(true)}>
              <ArrowDownIcon height={24} width={24} />
              <MonthText>Outubro</MonthText>
            </MonthButton>

            <Modal
              isVisible={isModalVisible}
              onBackdropPress={() => setIsModalVisible(false)}
            >
              <ModalContent>
                <ModalMonthButton>
                  <ModalMonthButtonText>Janeiro</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Fevereiro</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Março</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Abril</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Maio</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Junho</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Julho</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Agosto</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Setembro</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Outubro</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Novembro</ModalMonthButtonText>
                </ModalMonthButton>
                <ModalMonthButton>
                  <ModalMonthButtonText>Dezembro</ModalMonthButtonText>
                </ModalMonthButton>
              </ModalContent>
            </Modal>

            <NotificationButton>
              <NotificationIcon height={32} width={32} />
            </NotificationButton>
          </HeaderItems>

          <BalanceTitle>Saldo da conta</BalanceTitle>
          <Balance>R$ {totalAccountBalance}</Balance>

          <Summary>
            <Income>
              <IncomeIcon height={48} width={48} />

              <IncomeTextArea>
                <IncomeTitle>Renda</IncomeTitle>

                <IncomeValue>R$5000</IncomeValue>
              </IncomeTextArea>
            </Income>

            <Expenses>
              <ExpensesIcon height={48} width={48} />

              <ExpensesTextArea>
                <ExpensesTitle>Despesas</ExpensesTitle>

                <ExpensesValue>R$1200</ExpensesValue>
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
              handleSelectedChart(todayChart)
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
              handleSelectedChart(weekChart)
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
              handleSelectedChart(monthChart)
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
              handleSelectedChart(yearChart)
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
    </>
  )
}
