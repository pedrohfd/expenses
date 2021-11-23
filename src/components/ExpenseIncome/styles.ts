import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  background: ${colors.light_100};
  padding: 0 16px;

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`

export const CategoryPicker = styled.TouchableOpacity`
  height: 56px;
  padding-left: 16px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  justify-content: center;
`

export const CategoryPickerText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  color: ${colors.light_20};
`

export const DescriptionInput = styled.TextInput`
  height: 56px;
  justify-content: center;

  padding-left: 16px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  font-size: 16px;
  font-family: ${fonts.medium};

  margin-top: 16px;
`

export const WalletPicker = styled.TouchableOpacity`
  height: 56px;
  padding-left: 16px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  justify-content: center;

  margin-top: 16px;
`

export const WalletPickerText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  color: ${colors.light_20};
`

export const AddAttachmentButton = styled.TouchableOpacity`
  flex-direction: row;

  height: 56px;
  padding-left: 16px;

  border-style: dashed;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  align-items: center;
  justify-content: center;

  margin-top: 16px;
`

export const AddAttachmentButtonText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};
  color: ${colors.light_20};
`

export const RepeatButtonArea = styled.View`
  flex-direction: row;

  height: 56px;
  padding-left: 16px;

  align-items: center;

  margin-top: 16px;
`

export const RepeatButtonTextArea = styled.View``

export const RepeatButtonTitle = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.dark_25};
`

export const RepeatButtonSubtitle = styled.Text`
  font-size: 13px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
  margin-top: 4px;
`

export const ContinueButton = styled.TouchableOpacity`
  height: 56px;

  justify-content: center;
  align-items: center;

  background: ${colors.violet_100};

  margin-top: 40px;
  margin-bottom: 24px;

  border-radius: 16px;
`

export const ContinueButtonText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.light_80};
`
