import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: ${colors.violet_100};
  flex: 1;
`

export const Title = styled.Text`
  text-align: center;

  margin-top: 46px;

  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.light_80};
`
