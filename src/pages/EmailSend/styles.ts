import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: #fff;
  flex: 1;
`

export const Illustration = styled.Image`
  height: 312px;
  width: 312px;

  margin-top: 32px;

  align-self: center;
`

export const PrimaryText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.semiBold};

  margin-top: 18px;

  text-align: center;

  color: ${colors.dark_100};
`

export const SecondaryText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  margin: 24px 24px 0;
  text-align: center;

  color: ${colors.dark_100};
`

export const BackButton = styled.TouchableOpacity`
  height: 56px;

  margin: 190px 16px 0;

  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background: ${colors.violet_100};
`

export const BackButtonText = styled.Text`
  color: ${colors.light_80};

  font-size: 18px;
  font-family: ${fonts.semiBold};
`
