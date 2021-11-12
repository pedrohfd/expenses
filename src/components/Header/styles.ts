import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

interface HeaderProps {
  color: string
}

const color = {
  violet: colors.violet_100,
  light: colors.light_100,
  red: colors.red_100,
  blue: colors.blue_100,
  green: colors.green_100,
}

export const Container = styled.View<HeaderProps>`
  background: ${props =>
    props.color === color.violet
      ? colors.violet_100
      : props.color === color.light
      ? colors.light_100
      : props.color === color.blue
      ? colors.blue_100
      : props.color === color.green
      ? colors.green_100
      : colors.red_100};

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

interface TextColorProp {
  textColor: string
}

export const Text = styled.Text<TextColorProp>`
  line-height: 22px;
  font-size: 18px;
  font-family: ${fonts.semiBold};

  color: ${props =>
    props.textColor === colors.dark_50 ? colors.dark_50 : colors.light_100};
`

export const Button = styled.TouchableOpacity``
