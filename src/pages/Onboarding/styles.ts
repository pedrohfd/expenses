import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
  align-items: center;
`

export const SignUpButton = styled.TouchableOpacity`
  background-color: ${colors.violet_100};
  height: 56px;
  width: 343px;

  margin-top: 33px;
  margin-bottom: 16px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`

export const SignUpButtonText = styled.Text`
  color: ${colors.light_80};
  font-size: 18px;
  font-family: ${fonts.semiBold};
  line-height: 22px;
`

export const LoginButton = styled.TouchableOpacity`
  background-color: ${colors.violet_20};
  height: 56px;
  width: 343px;

  margin-bottom: 42px;
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`

export const LoginButtonText = styled.Text`
  color: ${colors.violet_100};
  font-size: 18px;
  font-family: ${fonts.semiBold};
  line-height: 22px;
`
