import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: ${colors.violet_100};
  flex: 1;
`

interface BankType {
  bankType: string
}

export const Title = styled.Text<BankType>`
  font-family: ${fonts.semiBold};
  font-size: 18px;

  color: ${colors.light_80};

  margin-top: ${props => (props.bankType === 'banco' ? '208px' : '348px')};
  margin-left: 16px;
`

export const Balance = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 64px;

  color: ${colors.light_80};

  margin-left: 16px;
  margin-top: 13px;
`

export const BottomArea = styled.View`
  margin-top: 8px;

  background: ${colors.light_100};

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  padding: 0 16px;
`

export const NameArea = styled.View`
  justify-content: center;
  margin-top: 16px;

  height: 56px;

  border-width: 1px;
  border-color: ${colors.light_60};
  border-radius: 16px;

  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};

  padding-left: 16px;
`

export const NameInput = styled.TextInput`
  height: 56px;

  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
`

export const BankName = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
`

export const PickerArea = styled.View`
  padding-left: 10px;

  border-width: 1px;
  border-color: ${colors.light_60};
  border-radius: 16px;

  margin-top: 24px;
`

export const Button = styled.TouchableOpacity`
  margin-top: 40px;
  margin-bottom: 50px;

  height: 56px;

  align-items: center;
  justify-content: center;

  background: ${colors.violet_100};

  border-radius: 16px;
`

export const ButtonText = styled.Text`
  color: ${colors.light_100};

  font-size: 18px;
  font-family: ${fonts.semiBold};
`

export const BankTypeArea = styled.View``

export const BankTypeTitle = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  margin-top: 16px;
  margin-bottom: 16px;
`

export const BankButtonArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

interface ButtonPressed {
  pressed: boolean
}

export const BankButton = styled.TouchableOpacity<ButtonPressed>`
  height: 40px;
  width: 88px;

  justify-content: center;
  align-items: center;

  background: ${props => (props.pressed ? colors.violet_20 : '#f1f1fa')};

  border-color: ${props => (props.pressed ? colors.violet_100 : '#0000')};
  border-width: ${props => (props.pressed ? '1px' : '0')};
  border-radius: 8px;
`
