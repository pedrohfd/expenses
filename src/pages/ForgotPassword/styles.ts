import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import fonts from '../../styles/fonts'
import { colors } from '../../styles/colors'

export const Container = styled(SafeAreaView)`
  background: #fff;
  flex: 1;
`

export const PrimaryText = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 24px;

  margin: 69px 16px 0;

  color: ${colors.dark_100};
`

export const EmailInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light_20,
})`
  height: 56px;

  margin: 46px 16px 0;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  padding-left: 16px;

  color: ${colors.dark_50};
`

export const ContinueButton = styled.TouchableOpacity`
  height: 56px;

  margin: 32px 16px 0;

  border-radius: 16px;

  background: ${colors.violet_100};

  align-items: center;
  justify-content: center;
`

export const ContinueButtonText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};
  line-height: 22px;

  color: ${colors.light_80};
`
