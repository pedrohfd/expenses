import React from 'react'

import ShoppingIcon from '../../assets/icons/shopping-bag.svg'
import SubscriptionIcon from '../../assets/icons/recurring-bill.svg'
import FoodIcon from '../../assets/icons/restaurant.svg'
import SalaryIcon from '../../assets/icons/salary.svg'
import TransportationIcon from '../../assets/icons/car.svg'
import {
  CardRightArea,
  CardLeftArea,
  Container,
  IconArea,
  Subtitle,
  TextArea,
  Time,
  Title,
  Value,
} from './styles'

export function TransactionCardItem() {
  return (
    <Container>
      <IconArea>
        <ShoppingIcon height={40} width={40} />
      </IconArea>

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
