import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AppStackParamList } from '../pages/RootStackParams'
import { PinSetup } from '../pages/PinSetup'
import { PinConfirmation } from '../pages/PinConfirmation'

const StackRoutes = createNativeStackNavigator<AppStackParamList>()

export function AppRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='PinSetup' component={PinSetup} />
      <StackRoutes.Screen name='PinConfirmation' component={PinConfirmation} />
    </StackRoutes.Navigator>
  )
}
