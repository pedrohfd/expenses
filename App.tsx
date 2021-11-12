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
import * as Linking from 'expo-linking'
import AuthProvider from './src/context/auth'
import { StatusBar } from 'expo-status-bar'

const prefix = Linking.makeUrl('/')

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if (!fontsLoaded) return <AppLoading />

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        ResetPassword: 'reset',
      },
    },
  }

  return (
    <NavigationContainer linking={linking}>
      <AuthProvider>
        <>
          <StatusBar style='light' />
          <Routes />
        </>
      </AuthProvider>
    </NavigationContainer>
  )
}
