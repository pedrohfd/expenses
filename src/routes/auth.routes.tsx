import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack'

import { EmailSend } from '../pages/EmailSend'
import { ForgotPassword } from '../pages/ForgotPassword'
import { Login } from '../pages/Login'
import { Onboarding } from '../pages/Onboarding'
import { PrivacyAndPolice } from '../pages/PrivacyAndPolice'
import { ResetPassword } from '../pages/ResetPassword'
import { AuthStackParamList } from '../pages/RootStackParams'
import { SignUp } from '../pages/SignUp'

const StackRoutes = createStackNavigator<AuthStackParamList>()

export function AuthRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='Onboarding' component={Onboarding} />
      <StackRoutes.Screen
        name='SignUp'
        component={SignUp}
        options={{
          ...TransitionPresets.ModalTransition,
        }}
      />
      <StackRoutes.Screen
        name='PrivacyAndPolice'
        component={PrivacyAndPolice}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <StackRoutes.Screen
        name='Login'
        component={Login}
        options={{
          ...TransitionPresets.ModalTransition,
        }}
      />
      <StackRoutes.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{
          ...TransitionPresets.ModalTransition,
        }}
      />
      <StackRoutes.Screen name='EmailSend' component={EmailSend} />
      <StackRoutes.Screen name='ResetPassword' component={ResetPassword} />
    </StackRoutes.Navigator>
  )
}
