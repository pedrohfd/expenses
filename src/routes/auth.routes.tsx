import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Onboarding } from '../pages/Onboarding'
import { RootStackParamList } from '../pages/RootStackParams'
import { SignUp } from '../pages/SignUp'

const StackRoutes = createNativeStackNavigator<RootStackParamList>()

export function AuthRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='Onboarding' component={Onboarding} />
      <StackRoutes.Screen name='SignUp' component={SignUp} />
    </StackRoutes.Navigator>
  )
}
