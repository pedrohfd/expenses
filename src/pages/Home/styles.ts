import styled from 'styled-components/native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { MotiView } from 'moti'

import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

interface ContainerProps {
  height: number
}

export const StatusBarColor = styled.View<ContainerProps>`
  height: ${props => props.height};
  background: #fff6e5;
`

export const Container = styled.View``

export const Gradient = styled(LinearGradient)`
  height: 312px;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`

export const HeaderItems = styled.View`
  flex-direction: row;

  justify-content: space-between;
  margin: 16px 16px 0;
`

export const Avatar = styled.View`
  height: 32px;
  width: 32px;

  background: ${colors.violet_100};
  border-radius: 16px;
`

export const MonthButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const MonthText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 14px;

  color: ${colors.dark_50};
`

export const NotificationButton = styled.TouchableOpacity``

export const BalanceTitle = styled.Text`
  text-align: center;
  margin-top: 23px;

  font-size: 14px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
`

export const Balance = styled.Text`
  text-align: center;
  margin-top: 9px;

  font-size: 40px;
  font-family: ${fonts.semiBold};

  color: ${colors.dark_75};
`

export const Summary = styled.View`
  flex-direction: row;

  justify-content: space-between;

  margin: 17px 16px 0;
`

export const Income = styled.View`
  height: 80px;
  width: 164px;

  border-radius: 28px;
  padding: 0 16px;

  background: ${colors.green_100};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const IncomeTextArea = styled.View``

export const IncomeTitle = styled.Text`
  color: ${colors.light_80};

  font-size: 14px;
  font-family: ${fonts.medium};
`

export const IncomeValue = styled.Text`
  color: ${colors.light_80};

  font-size: 22px;
  font-family: ${fonts.semiBold};
`

export const Expenses = styled.View`
  height: 80px;
  width: 164px;

  border-radius: 28px;
  padding: 0 16px;

  background: ${colors.red_100};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ExpensesTextArea = styled.View``

export const ExpensesTitle = styled.Text`
  color: ${colors.light_80};

  font-size: 14px;
  font-family: ${fonts.medium};
`

export const ExpensesValue = styled.Text`
  color: ${colors.light_80};

  font-size: 22px;
  font-family: ${fonts.semiBold};
`

export const ChartArea = styled.View``

export const ChartTitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.dark_100};

  margin-left: 16px;
`

export const ChartFilterButtonArea = styled.View`
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;

  align-items: center;

  justify-content: space-around;
`

export const ChartFilterButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 34px;
  width: 90px;
`

interface TextProps {
  pressed: boolean
}

export const ChartFilterTodayButtonText = styled.Text<TextProps>`
  color: ${props => (props.pressed ? colors.yellow_100 : colors.light_20)};
  font-size: 14px;
  font-family: ${props => (props.pressed ? fonts.bold : fonts.medium)};
`

export const ChartFilterWeekButtonText = styled.Text<TextProps>`
  color: ${props => (props.pressed ? colors.yellow_100 : colors.light_20)};
  font-size: 14px;
  font-family: ${props => (props.pressed ? fonts.bold : fonts.medium)};
`

export const ChartFilterMonthButtonText = styled.Text<TextProps>`
  color: ${props => (props.pressed ? colors.yellow_100 : colors.light_20)};
  font-size: 14px;
  font-family: ${props => (props.pressed ? fonts.bold : fonts.medium)};
`

export const ChartFilterYearButtonText = styled.Text<TextProps>`
  color: ${props => (props.pressed ? colors.yellow_100 : colors.light_20)};
  font-size: 14px;
  font-family: ${props => (props.pressed ? fonts.bold : fonts.medium)};
`

export const AnimatedButton = styled(MotiView)`
  background: ${colors.yellow_20};
  height: 34px;
  width: 90px;

  position: absolute;

  border-radius: 16px;
`

export const TransactionTitleArea = styled.View`
  flex-direction: row;
  margin-top: 16px;
  padding: 16px;

  justify-content: space-between;
  align-items: center;
`

export const TransactionTitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.dark_25};
`

export const TransactionButtonFilter = styled.TouchableOpacity`
  height: 32px;
  width: 78px;

  border-radius: 40px;

  background: ${colors.violet_20};

  align-items: center;
  justify-content: center;
`

export const TransactionButtonFilterText = styled.Text`
  color: ${colors.violet_100};

  font-size: 14px;
  font-family: ${fonts.medium};
`
