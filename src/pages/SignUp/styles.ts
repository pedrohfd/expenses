import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import CheckBox from '@react-native-community/checkbox'

import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'
import showIcon from '../../assets/icons/show.svg'
import googleIcon from '../../assets/icons/flat-color-icons_google.svg'

export const Container = styled(SafeAreaView)`
  background: #ffffff;
  flex: 1;
`

export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light_20,
})`
  height: 56px;

  margin: 56px 16px 0;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.dark_50};
`

export const EmailInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light_20,
})`
  height: 56px;

  margin: 24px 16px 0;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.dark_50};
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

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light_20,
})`
  width: 90%;

  padding-left: 16px;

  font-family: ${fonts.medium};
  font-size: 16px;
  line-height: 19px;
  color: ${colors.dark_50};
`

export const ShowButton = styled.TouchableOpacity``

export const ShowIcon = styled(showIcon)``

export const PrivacyArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 17px;
  padding: 0 26px 0 16px;
`

export const PrivacyCheckbox = styled(CheckBox).attrs({
  tintColors: { true: colors.violet_100, false: colors.violet_100 },
})``

export const PrivacyBlackText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 14px;
  line-height: 18px;
`

export const PrivacyButtonArea = styled.View`
  margin-left: 10px;
`

export const PrivacyUpperButtonArea = styled.View`
  flex-direction: row;
`

export const PrivacyPurpleButton = styled.TouchableWithoutFeedback``

export const PrivacyPurpleText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 14px;
  line-height: 18px;

  color: ${colors.violet_100};
`

export const SignUpButton = styled.TouchableOpacity`
  height: 56px;

  margin: 27px 16px 0;

  border-radius: 16px;

  background: ${colors.violet_100};

  justify-content: center;
  align-items: center;
`

export const SignUpButtonText = styled.Text`
  color: ${colors.light_80};

  line-height: 22px;
  font-size: 18px;
  font-family: ${fonts.semiBold};
`

export const ComplementText = styled.Text`
  text-align: center;

  line-height: 18px;
  font-size: 14px;
  font-family: ${fonts.bold};

  margin: 12px 0;

  color: ${colors.light_20};
`

export const SignUpGoogleButton = styled.TouchableOpacity`
  flex-direction: row;

  height: 56px;

  margin: 0 16px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  justify-content: center;
  align-items: center;
`

export const SignUpGoogleButtonText = styled.Text`
  color: ${colors.dark_50};

  line-height: 22px;
  font-size: 18px;
  font-family: ${fonts.semiBold};

  margin-left: 10px;
`

export const GoogleIcon = styled(googleIcon)``

export const LoginTextArea = styled.View`
  flex-direction: row;

  justify-content: center;

  margin: 19px 66px 0;
`

export const LoginText = styled.Text`
  color: ${colors.light_20};

  line-height: 19px;
  font-size: 16px;
  font-family: ${fonts.medium};
`

export const LoginPageButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${colors.violet_100};
`

export const LoginPageButtonText = styled.Text`
  color: ${colors.violet_100};

  line-height: 19px;
  font-size: 16px;
  font-family: ${fonts.medium};
`
