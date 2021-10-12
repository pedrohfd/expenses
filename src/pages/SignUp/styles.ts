import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'
import Icon from '../../assets/icons/show.svg'

export const Container = styled(SafeAreaView)`
  background: #ffffff;
  flex: 1;
`

export const NameInput = styled.TextInput`
  height: 56px;

  margin-top: 56px;
  margin-left: 16px;
  margin-right: 16px;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.light_20};
`

export const EmailInput = styled.TextInput`
  height: 56px;

  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.light_20};
`

export const PasswordInput = styled.TextInput`
  width: 90%;

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.light_20};
`

export const PasswordInputArea = styled.View`
  flex-direction: row;

  height: 56px;

  padding-right: 16px;

  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  align-items: center;
  justify-content: space-between;
`

export const ShowButton = styled.TouchableOpacity``

export const ShowIcon = styled(Icon)``
