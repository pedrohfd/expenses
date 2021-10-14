import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: #fff;
  flex: 1;
`

export const PasswordInput = styled.TextInput`
  height: 56px;

  border-color: ${colors.light_60};
  border-width: 1px;
  border-radius: 16px;

  padding-left: 16px;

  margin: 56px 16px 0;

  color: ${colors.dark_50};

  font-size: 16px;
  font-family: ${fonts.medium};
  line-height: 18px;
`

export const PasswordConfirmInput = styled.TextInput`
  height: 56px;

  border-color: ${colors.light_60};
  border-width: 1px;
  border-radius: 16px;

  padding-left: 16px;

  margin: 28px 16px 0;

  color: ${colors.dark_50};

  font-size: 16px;
  font-family: ${fonts.medium};
  line-height: 18px;
`

export const ContinueButton = styled.TouchableOpacity`
  height: 56px;

  border-radius: 16px;

  margin: 32px 16px 0;

  background: ${colors.violet_100};

  align-items: center;
  justify-content: center;
`

export const ContinueButtonText = styled.Text`
  color: ${colors.light_80};

  font-size: 18px;
  font-family: ${fonts.semiBold};
`
