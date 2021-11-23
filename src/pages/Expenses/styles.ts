import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: ${colors.red_100};
  flex: 1;
  justify-content: space-between;
`

export const Title = styled.Text`
  margin-top: 59px;
  margin-left: 26px;
  font-family: ${fonts.semiBold};
  font-size: 18px;

  color: ${colors.light_80};
  opacity: 0.64;
`

export const Expense = styled.Text`
  margin-top: 13px;
  margin-left: 26px;
  margin-bottom: 16px;

  font-size: 64px;
  font-family: ${fonts.semiBold};

  color: ${colors.light_80};
`
