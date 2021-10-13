import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'
import showIcon from '../../assets/icons/show.svg'
import googleIcon from '../../assets/icons/flat-color-icons_google.svg'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
`

export const EmailInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light_20,
})`
  height: 56px;

  margin: 56px 16px 0;

  border-width: 1px;
  border-color: ${colors.light_60};
  border-radius: 16px;

  padding-left: 16px;

  line-height: 18px;
  font-size: 16px;
  font-family: ${fonts.medium};
`

export const PasswordInputArea = styled.View`
  flex-direction: row;

  height: 56px;

  padding-right: 16px;

  margin: 24px 16px 0;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  align-items: center;
  justify-content: space-between;
`

export const PasswordInput = styled.TextInput`
  width: 90%;

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.dark_50};
`

export const ShowButton = styled.TouchableOpacity``

export const ShowIcon = styled(showIcon)``

export const LoginButton = styled.TouchableOpacity`
  height: 56px;

  margin: 40px 16px 0;

  border-radius: 16px;

  background: ${colors.violet_100};

  align-items: center;
  justify-content: center;
`

export const LoginButtonText = styled.Text`
  color: ${colors.light_80};

  font-family: ${fonts.semiBold};
  font-size: 18px;
  line-height: 22px;
`

export const ComplementText = styled.Text`
  text-align: center;

  margin: 12px 0;

  color: ${colors.light_20};

  font-family: ${fonts.bold};
  font-size: 14px;
  line-height: 18px;
`

export const LoginGoogleButton = styled.TouchableOpacity`
  flex-direction: row;

  height: 56px;

  margin: 0 16px;

  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};
`

export const GoogleIcon = styled(googleIcon)``

export const LoginGoogleButtonText = styled.Text`
  color: ${colors.dark_50};

  font-family: ${fonts.semiBold};
  font-size: 18px;
  line-height: 22px;

  margin-left: 10px;
`

export const ForgotButton = styled.TouchableOpacity`
  margin-top: 33px;
  align-self: center;
  align-items: center;
`

export const ForgotButtonText = styled.Text`
  color: ${colors.violet_100};

  line-height: 22px;
  font-size: 18px;
  font-family: ${fonts.semiBold};
`

export const SignUpPageTextArea = styled.View`
  flex-direction: row;

  justify-content: center;

  margin-top: 38px;
`

export const SignUpPageText = styled.Text`
  line-height: 19px;
  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
`

export const SignUpPageButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${colors.violet_100};
`

export const SignUpPageButtonText = styled.Text`
  line-height: 19px;
  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.violet_100};
`
