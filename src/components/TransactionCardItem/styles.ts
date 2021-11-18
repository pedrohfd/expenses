import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex-direction: row;
`

export const Icon = styled.View`
  height: 60px;
  width: 60px;

  background: ${colors.yellow_20};
`

export const TextArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  margin-left: 9px;
`

export const CardLeftArea = styled.View`
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.dark_25};
`

export const Value = styled.Text``

export const CardRightArea = styled.View`
  justify-content: space-between;
`

export const Subtitle = styled.Text``

export const Time = styled.Text``
