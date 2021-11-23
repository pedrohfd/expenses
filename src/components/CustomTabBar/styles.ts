import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Button = styled.View`
  position: absolute;
  height: 83px;
  width: 80px;
  background: #00f;
  top: -94px;
  align-self: center;
`

export const CenterButton = styled.TouchableHighlight.attrs({
  underlayColor: 'transparent',
})`
  top: -25px;
`
