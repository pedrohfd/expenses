import React from 'react'
import {
  CardRightArea,
  CardLeftArea,
  Container,
  Icon,
  Subtitle,
  TextArea,
  Time,
  Title,
  Value,
} from './styles'

export function TransactionCardItem() {
  return (
    <Container>
      <Icon />
      <TextArea>
        <CardLeftArea>
          <Title>Compras</Title>
          <Subtitle>Alguma coisa</Subtitle>
        </CardLeftArea>

        <CardRightArea>
          <Value>-120</Value>

          <Time>10:00 AM</Time>
        </CardRightArea>
      </TextArea>
    </Container>
  )
}
