import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  padding: 0 16px;
`

export const Title = styled.Text`
  font-family: ${fonts.medium};
  font-size: 36px;
  margin-top: 67px;
`

export const Subtitle = styled.Text`
  font-family: ${fonts.medium};
  font-size: 14px;
  margin-right: 67px;
  margin-top: 37px;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-top: 500px;

  height: 56px;
  border-radius: 16px;
  background: ${colors.violet_100};
`

export const ButtonText = styled.Text`
  color: ${colors.light_100};
  font-size: 18px;
  font-family: ${fonts.semiBold};
`
