import React from 'react'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
