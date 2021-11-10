import React, { ReactElement, useState, useEffect, createContext } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import * as AuthSession from 'expo-auth-session'

import { auth, database } from '../config'
import { AuthStackParamList } from '../pages/RootStackParams'

interface User {
  email: string
  password: string
  name: string
  uid: string
}

interface UserProps {
  email: string
  password: string
  name?: string
}

interface UserCredentials {
  uid: string
}

interface AuthContextProps {
  signed: boolean
  user: UserProps | null
  pin: string
  setPin: (state: string) => void
  signUp: ({ email, password, name }: UserProps) => {}
  signUpWithGoogle(): Promise<void>
  signIn: ({ email, password }: UserProps) => {}
  signInWithGoogle(): Promise<void>
  savePin: () => {}
}

interface ContextProps {
  children: ReactElement
}

interface GoogleSignResponse {
  params: {
    access_token: string
  }
  type: string
}

type authScreenProp = NativeStackNavigationProp<AuthStackParamList>

export const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children }: ContextProps) {
  const [user, setUser] = useState<User | null>(null)
  const [pin, setPin] = useState('')
  const navigation = useNavigation<authScreenProp>()

  useEffect(() => {
    async function loadStorage() {
      const storageUser = (await AsyncStorage.getItem(
        '@expenses_user_uid'
      )) as string

      await database
        .ref('users')
        .child(storageUser)
        .once('value')
        .then(snapshot => {
          const data = {
            uid: snapshot.val().uid,
            name: snapshot.val().name,
            email: snapshot.val().email,
            password: snapshot.val().password,
          }

          setUser(data)
        })
    }

    loadStorage()
  }, [])

  async function savePin() {
    const { uid } = user as User

    await database.ref('users').child(uid).update({
      pin: pin,
    })
  }

  async function storageUserUid(data: string) {
    await AsyncStorage.setItem('@expenses_user_uid', data)
  }

  async function signIn({ email, password }: UserProps) {
    try {
      await auth
        .signInWithEmailAndPassword(email, password)
        .then(async userCredentials => {
          const { uid } = userCredentials.user as UserCredentials

          await database
            .ref('users')
            .child(uid)
            .once('value')
            .then(snapshot => {
              const data = {
                uid,
                name: snapshot.val().name,
                email: email,
                password: password,
              }

              setUser(data)
              storageUserUid(uid)
            })
        })
    } catch (err) {
      alert(err)
    }
  }

  async function signInWithGoogle() {
    const CLIENT_ID =
      '1045245905103-1onofa9vnmut6up5qvniccekjjvfh8m9.apps.googleusercontent.com'
    const REDIRECT_URI = 'https://auth.expo.io/@pedrohfd/expenses'
    const RESPONSE_TYPE = 'token'
    const SCOPE = encodeURI('profile email')

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    const { type, params } = (await AuthSession.startAsync({
      authUrl: authUrl,
    })) as GoogleSignResponse

    if (type === 'success') {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
      )

      const userInfo = await response.json()

      const email = userInfo.email
      const password = userInfo.id

      try {
        await auth
          .signInWithEmailAndPassword(email, password)
          .then(async userCredentials => {
            const { uid } = userCredentials.user as UserCredentials

            await database
              .ref('users')
              .child(uid)
              .once('value')
              .then(snapshot => {
                const data = {
                  uid,
                  name: snapshot.val().name,
                  email: email,
                  password: password,
                }

                setUser(data)
                storageUserUid(uid)
              })
          })
      } catch (err) {
        alert(err)
      }
    }
  }

  async function signUp({ email, password, name }: UserProps) {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then(async userCredentials => {
          const { uid } = userCredentials.user as UserCredentials

          await database.ref('users').child(uid).set({
            email,
            password,
            name,
            uid,
          })
        })

      navigation.navigate('Login')
    } catch (err) {
      alert(err)
    }
  }

  async function signUpWithGoogle() {
    const CLIENT_ID =
      '1045245905103-1onofa9vnmut6up5qvniccekjjvfh8m9.apps.googleusercontent.com'
    const REDIRECT_URI = 'https://auth.expo.io/@pedrohfd/expenses'
    const RESPONSE_TYPE = 'token'
    const SCOPE = encodeURI('profile email')

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    const { type, params } = (await AuthSession.startAsync({
      authUrl: authUrl,
    })) as GoogleSignResponse

    if (type === 'success') {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
      )

      const userInfo = await response.json()

      const email = userInfo.email
      const password = userInfo.id
      const name = userInfo.name

      try {
        await auth
          .createUserWithEmailAndPassword(email, password)
          .then(async userCredentials => {
            const { uid } = userCredentials.user as UserCredentials

            await database.ref('users').child(uid).set({
              email,
              password,
              name,
              uid,
            })
          })

        navigation.navigate('Login')
      } catch (err) {
        alert(err)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        pin,
        setPin,
        signUp,
        signUpWithGoogle,
        signIn,
        signInWithGoogle,
        savePin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider