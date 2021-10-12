import styled from 'styled-components/native'
import { colors } from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  align-items: center;
  margin-top: 76px;
`

export const Illustration = styled.Image`
  height: 312px;
  width: 312px;
`

export const Title = styled.Text`
  text-align: center;

  line-height: 39px;
  font-size: 32px;
  font-family: ${fonts.bold};
  color: ${colors.dark_50};

  padding-left: 49px;
  padding-right: 49px;
  margin-top: 41px;
`

export const Subtitle = styled.Text`
  text-align: center;

  line-height: 19px;
  font-size: 16px;
  font-family: ${fonts.medium};
  color: ${colors.light_20};

  padding-left: 49px;
  padding-right: 49px;
  margin-top: 17px;
`
