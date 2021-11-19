import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { Button, Container, Icon } from './styles'

export function TabBg({ ...props }) {
  return (
    <Svg width={75} height={61} viewBox='0 0 75 61' {...props}>
      <Path
        d='M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z'
        fill={'#ffffff'}
      />
    </Svg>
  )
}

export function CustomTabBar({ ...props }) {
  return (
    <Container>
      <TabBg style={{ position: 'absolute', top: 0 }} />
      <Button onPress={props.onPress}>
        <Icon />
      </Button>
    </Container>
  )
}
