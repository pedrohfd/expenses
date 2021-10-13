import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: #ffffff;
  flex: 1;
`

export const Title = styled.Text`
  font-family: ${fonts.bold};
  font-size: 24px;
  line-height: 28px;

  margin: 0 16px 10px;
`

export const Content = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  line-height: 19px;

  margin: 0 16px 10px;

  text-align: justify;
`

export const ContentArea = styled.View`
  padding-bottom: 20px;
`
