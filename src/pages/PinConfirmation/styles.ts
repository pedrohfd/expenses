import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

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

export const ButtonArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 180px;
`

export const Button = styled.TouchableOpacity`
  width: 125px;
  height: 90px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 48px;
  font-family: ${fonts.medium};

  color: ${colors.light_80};
`
