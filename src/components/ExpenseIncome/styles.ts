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
  padding-right: 16px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  padding-right: 16px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.light_60};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
  justify-content: space-between;

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
  margin-bottom: 16px;

  border-radius: 16px;
`

export const ContinueButtonText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.light_80};
`

export const ModalContent = styled.View`
  background: ${colors.light_100};
  height: 264px;

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`

export const Swipe = styled.View`
  align-self: center;

  height: 4px;
  width: 36px;

  margin-top: 8px;

  background: ${colors.violet_40};

  border-radius: 2px;
`

export const FrequencyPicker = styled.TouchableOpacity`
  height: 56px;

  margin: 24px 16px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};
`

export const FrequencyPickerText = styled.Text`
  color: ${colors.light_20};
  font-size: 16px;
  font-family: ${fonts.medium};
`

export const EndPicker = styled.TouchableOpacity`
  height: 56px;

  margin: 24px 16px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  border-width: 1px;
  border-radius: 16px;
  border-color: ${colors.light_60};
`

export const EndPickerText = styled.Text`
  color: ${colors.light_20};
  font-size: 16px;
  font-family: ${fonts.medium};
`

export const NextButton = styled.TouchableOpacity`
  height: 56px;

  justify-content: center;
  align-items: center;

  background: ${colors.violet_100};

  margin: 24px 16px 0;

  border-radius: 16px;
`

export const NextButtonText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.light_80};
`
