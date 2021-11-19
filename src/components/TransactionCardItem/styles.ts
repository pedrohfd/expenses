import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex-direction: row;

  margin: 0 20px;
  padding: 16px;
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

  padding: 6px 0;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.medium};

  color: ${colors.dark_25};
`

export const Subtitle = styled.Text`
  font-size: 13px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
`

export const CardRightArea = styled.View`
  justify-content: space-between;

  align-items: flex-end;

  padding: 6px 0;
`

export const Value = styled.Text`
  font-size: 16px;
  font-family: ${fonts.semiBold};

  color: ${colors.red_100};
`

export const Time = styled.Text`
  font-size: 13px;
  font-family: ${fonts.medium};

  color: ${colors.light_20};
`
