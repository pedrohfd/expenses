import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import React, { useState } from 'react'

import { Button, CenterButton, Container, Icon, TabBg } from './styles'

interface CustomButtonProps {
  index: number
  isFocused: boolean
}

export function CustomButton({ index, isFocused }: CustomButtonProps) {
  let center = 0

  return (
    <Container>
      {index > 1 ? (
        <CenterButton>
          <TabBg>teste</TabBg>
        </CenterButton>
      ) : (
        <Container>
          <Icon />
        </Container>
      )}
    </Container>
  )
}

export function CustomTabBar({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <Container>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index
        const { options } = descriptors[route.key]

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress' as any,
            target: route.key as any,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <Button
            key={index}
            onPress={onPress}
            testID={options.tabBarTestID}
            accessibilityRole='button'
          >
            <CustomButton index={index} isFocused={isFocused} />
          </Button>
        )
      })}
    </Container>
  )
}
