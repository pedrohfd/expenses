import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import { RootStackParamList } from '../../pages/RootStackParams'
import { Button, Container, Text, View } from './styles'

type authScreenProp = NativeStackNavigationProp<RootStackParamList>

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation<authScreenProp>()

  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
      </Button>
      <View>
        <Text>{title}</Text>
      </View>
    </Container>
  )
}
