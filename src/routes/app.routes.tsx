import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import { AppStackParamList } from '../pages/RootStackParams'
import { PinSetup } from '../pages/PinSetup'
import { PinConfirmation } from '../pages/PinConfirmation'
import { SetupAccount } from '../pages/SetupAccount'
import { AddNewAccount } from '../pages/AddNewAccount'
import { Success } from '../pages/Success'
import { Home } from '../pages/Home'

const StackRoutes = createStackNavigator<AppStackParamList>()

export function AppRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='SetupAccount' component={SetupAccount} />
      <StackRoutes.Screen
        name='AddNewAccount'
        component={AddNewAccount}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <StackRoutes.Screen
        name='Success'
        component={Success}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <StackRoutes.Screen
        name='Home'
        component={Home}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
    </StackRoutes.Navigator>
  )
}

export function PinRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='PinSetup' component={PinSetup} />
      <StackRoutes.Screen
        name='PinConfirmation'
        component={PinConfirmation}
        options={{
          ...TransitionPresets.ModalFadeTransition,
        }}
      />
    </StackRoutes.Navigator>
  )
}
