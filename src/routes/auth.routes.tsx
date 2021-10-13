import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Login } from '../pages/Login'

import { Onboarding } from '../pages/Onboarding'
import { PrivacyAndPolice } from '../pages/PrivacyAndPolice'
import { RootStackParamList } from '../pages/RootStackParams'
import { SignUp } from '../pages/SignUp'

const StackRoutes = createNativeStackNavigator<RootStackParamList>()

export function AuthRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='Onboarding' component={Onboarding} />
      <StackRoutes.Screen name='SignUp' component={SignUp} />
      <StackRoutes.Screen
        name='PrivacyAndPolice'
        component={PrivacyAndPolice}
      />
      <StackRoutes.Screen name='Login' component={Login} />
    </StackRoutes.Navigator>
  )
}
