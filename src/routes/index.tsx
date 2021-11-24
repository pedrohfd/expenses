import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'
import { StatusBar } from 'expo-status-bar'

import { AccountRoutes, AppRoutes, PinRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { signed, isPinSet, isAccountSet } = useContext(AuthContext)

  return !signed ? (
    <AuthRoutes />
  ) : !isPinSet ? (
    <PinRoutes />
  ) : isAccountSet ? (
    <AppRoutes />
  ) : (
    <AccountRoutes />
  )
}
