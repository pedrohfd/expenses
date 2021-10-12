import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ArrowLeftIcon from '../../assets/icons/arrow-left.svg'
import { RootStackParamList } from '../../pages/RootStackParams'
import { Button, Container, Text } from './styles'

type authScreenProp = NativeStackNavigationProp<RootStackParamList>

export function Header() {
  const navigation = useNavigation<authScreenProp>()

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Onboarding')}>
        <ArrowLeftIcon />
      </Button>
      <Text>Sign Up</Text>
    </Container>
  )
}
