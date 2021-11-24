import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'
import { Dimensions } from 'react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${colors.blue_100};
`

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const Title = styled.Text`
  margin-top: 59px;
  margin-left: 26px;
  font-family: ${fonts.semiBold};
  font-size: 18px;

  color: ${colors.light_80};
  opacity: 0.64;
`

export const Value = styled.Text`
  margin-top: 13px;
  margin-left: 26px;
  margin-bottom: 16px;

  font-size: 64px;
  font-family: ${fonts.semiBold};

  color: ${colors.light_80};
`

export const Card = styled.View`
  background: ${colors.light_100};

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  padding: 0 16px;
`

export const FromToInputArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px 0 0;
`

export const FromInput = styled.TextInput`
  height: 56px;
  width: 180px;

  border-radius: 16px;
  border-color: ${colors.light_60};
  border-width: 1px;

  padding-left: 8px;
`

export const IconCircle = styled.View`
  border-color: ${colors.light_60};
  border-width: 1;
  border-radius: 24;
  height: 40;
  width: 40;

  background: ${colors.light_100};

  align-self: center;
  align-items: center;
  justify-content: center;

  z-index: 1;

  position: absolute;

  top: 32px;
  left: ${Dimensions.get('screen').width / 2 - 36};
`

export const ToInput = styled.TextInput`
  height: 56px;
  width: 180px;

  border-radius: 16px;
  border-color: ${colors.light_60};
  border-width: 1px;

  padding-left: 16px;
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
