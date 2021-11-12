import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'

import { AppRoutes, PinRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { signed, isPinSet } = useContext(AuthContext)

  return !signed ? <AuthRoutes /> : isPinSet ? <AppRoutes /> : <PinRoutes />
}
