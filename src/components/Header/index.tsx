import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import WhiteArrowLeftIcon from '../../assets/icons/white-arrow-left.svg'
import { AuthStackParamList } from '../../pages/RootStackParams'
import { Button, Container, Text, View } from './styles'
import { colors } from '../../styles/colors'

type authScreenProp = StackNavigationProp<AuthStackParamList>

interface HeaderProps {
  title: string
  color: string
  textColor: string
}

export function Header({ title, color, textColor }: HeaderProps) {
  const navigation = useNavigation<authScreenProp>()

  return (
    <Container color={color}>
      <Button onPress={() => navigation.goBack()}>
        {textColor === colors.dark_50 ? (
          <ArrowLeftIcon />
        ) : (
          <WhiteArrowLeftIcon width={32} height={32} />
        )}
      </Button>
      <View>
        <Text textColor={textColor}>{title}</Text>
      </View>
    </Container>
  )
}
