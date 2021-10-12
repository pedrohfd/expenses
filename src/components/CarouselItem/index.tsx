import React from 'react'
import { Dimensions } from 'react-native'
import { Container, Illustration, Subtitle, Title } from './styles'

export const SLIDER_WIDTH = Dimensions.get('screen').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

export function CarouselItem({ item }: any) {
  return (
    <Container>
      <Illustration
        source={{
          uri: item.image,
        }}
      />

      <Title>{item.title}</Title>
      <Subtitle>{item.subtitle}</Subtitle>
    </Container>
  )
}
