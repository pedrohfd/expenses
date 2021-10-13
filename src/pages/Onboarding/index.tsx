import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/core'

import {
  Container,
  LoginButton,
  LoginButtonText,
  SignUpButton,
  SignUpButtonText,
} from './styles'
import {
  CarouselItem,
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../../components/CarouselItem'
import { colors } from '../../styles/colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../RootStackParams'

type authScreenProp = NativeStackNavigationProp<RootStackParamList>

export function Onboarding() {
  const [index, setIndex] = useState<number>(0)
  const navigation = useNavigation<authScreenProp>()

  const carouselItems = [
    {
      title: 'Ganhe controle total do seu dinheiro',
      subtitle: 'Torne-se seu próprio gerente e faça valer cada centavo',
      image: 'https://storage.googleapis.com/carousel-image/money-hand.png',
    },
    {
      title: 'Saiba para onde vai o seu dinheiro',
      subtitle:
        'Acompanhe facilmente suas transações, com categorias a relatórios financeiros',
      image: 'https://storage.googleapis.com/carousel-image/sheet.png',
    },
    {
      title: 'Planejando a frente',
      subtitle:
        'Configure seu orçamento para cada categoria, então você esta no controle',
      image: 'https://storage.googleapis.com/carousel-image/planner.png',
    },
  ]

  return (
    <Container>
      <StatusBar backgroundColor='#fff' style='dark' />

      <Carousel
        renderItem={CarouselItem}
        data={carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={index}
        inactiveDotColor={colors.violet_20}
        dotColor={colors.violet_100}
        dotStyle={{
          width: 16,
          height: 16,
          borderRadius: 8,
        }}
        inactiveDotScale={0.5}
      />
      <SignUpButton onPress={() => navigation.navigate('SignUp')}>
        <SignUpButtonText>Cadastro</SignUpButtonText>
      </SignUpButton>

      <LoginButton onPress={() => navigation.navigate('Login')}>
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
    </Container>
  )
}
