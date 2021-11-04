import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import { AuthStackParamList } from '../../pages/RootStackParams'
import { Button, Container, Text, View } from './styles'

type authScreenProp = NativeStackNavigationProp<AuthStackParamList>

interface HeaderProps {
  title: string
  color: string
}

export function Header({ title, color }: HeaderProps) {
  const navigation = useNavigation<authScreenProp>()

  return (
    <Container color={color}>
      <Button onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </Button>
      <View>
        <Text>{title}</Text>
      </View>
    </Container>
  )
}
