import React from 'react'
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AppStackParamList } from '../pages/RootStackParams'
import { PinSetup } from '../pages/PinSetup'
import { PinConfirmation } from '../pages/PinConfirmation'
import { SetupAccount } from '../pages/SetupAccount'
import { AddNewAccount } from '../pages/AddNewAccount'
import { Success } from '../pages/Success'
import { Home } from '../pages/Home'
import { Transaction } from '../pages/Transaction'
import { Budget } from '../pages/Budget'
import { Profile } from '../pages/Profile'

import { colors } from '../styles/colors'

const BottomRoutes = createBottomTabNavigator<AppStackParamList>()

export function AppRoutes() {
  return (
    <BottomRoutes.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: colors.light_80,
        },
      }}
    >
      <BottomRoutes.Screen
        name='Home'
        component={Home}
        options={{
          tabBarItemStyle: {
            borderTopRightRadius: 100,
          },
        }}
      />
      <BottomRoutes.Screen
        name='Transaction'
        component={Transaction}
        // options={{
        //   tabBarButton: props => <CustomTabBar {...props} />,
        //   tabBarItemStyle: {
        //     backgroundColor: 'transparent',
        //   },
        // }}
      />
      <BottomRoutes.Screen
        name='Budget'
        component={Budget}
        options={{
          tabBarItemStyle: {
            marginLeft: 80,
            opacity: 0,
            backgroundColor: 'transparent',
          },
        }}
      />
      <BottomRoutes.Screen name='Profile' component={Profile} />
    </BottomRoutes.Navigator>
  )
}

const StackRoutes = createStackNavigator<AppStackParamList>()

export function PinRoutes() {
  return (
    <StackRoutes.Navigator>
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

export function AccountRoutes() {
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
    </StackRoutes.Navigator>
  )
}
