import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)``

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
