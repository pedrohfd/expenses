import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  background: #ffffff;

  flex-direction: row;

  height: 64px;

  align-items: center;
  padding-left: 20px;
`

export const View = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  margin-left: 10px;
`

export const Text = styled.Text`
  line-height: 22px;
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${colors.dark_50};
`

export const Button = styled.TouchableOpacity``