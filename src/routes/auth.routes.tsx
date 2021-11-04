import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { EmailSend } from '../pages/EmailSend'
import { ForgotPassword } from '../pages/ForgotPassword'
import { Login } from '../pages/Login'
import { Onboarding } from '../pages/Onboarding'
import { PrivacyAndPolice } from '../pages/PrivacyAndPolice'
import { ResetPassword } from '../pages/ResetPassword'
import { AuthStackParamList } from '../pages/RootStackParams'
import { SignUp } from '../pages/SignUp'

const StackRoutes = createNativeStackNavigator<AuthStackParamList>()

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
      <StackRoutes.Screen name='ForgotPassword' component={ForgotPassword} />
      <StackRoutes.Screen name='EmailSend' component={EmailSend} />
      <StackRoutes.Screen name='ResetPassword' component={ResetPassword} />
    </StackRoutes.Navigator>
  )
}
