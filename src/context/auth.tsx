import React, { ReactElement, useState, useEffect, createContext } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
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
  pin: string
  balance: {
    totalAccountBalance: number
    0: {
      income: number
      expenses: number
    }
    1: {
      income: number
      expenses: number
    }
    2: {
      income: number
      expenses: number
    }
    3: {
      income: number
      expenses: number
    }
    4: {
      income: number
      expenses: number
    }
    5: {
      income: number
      expenses: number
    }
    6: {
      income: number
      expenses: number
    }
    7: {
      income: number
      expenses: number
    }
    8: {
      income: number
      expenses: number
    }
    9: {
      income: number
      expenses: number
    }
    10: {
      income: number
      expenses: number
    }
    11: {
      income: number
      expenses: number
    }
  }
  accountType: {
    'Banco Inter': {
      accountBalance: number
      name: string
    }
    'Banco do Brasil': {
      accountBalance: number
      name: string
    }
    Bradesco: {
      accountBalance: number
      name: string
    }
    Itau: {
      accountBalance: number
      name: string
    }
    Santander: {
      accountBalance: number
      name: string
    }
    'C6 Bank': {
      accountBalance: number
      name: string
    }
    'Caixa Econômica': {
      accountBalance: number
      name: string
    }
    Nubank: {
      accountBalance: number
      name: string
    }
    Wallet: {
      accountBalance: number
      name: string
    }
  }
}

interface UserCredentials {
  uid: string
}

interface AuthContextProps {
  signed: boolean
  isPinSet: boolean
  isAccountSet: boolean
  user: User | null
  pin: string
  setPin: (state: string) => void
  signUp: ({ email, password, name }: User) => {}
  signUpWithGoogle(): Promise<void>
  signIn: ({ email, password }: User) => {}
  signInWithGoogle(): Promise<void>
  savePin: () => {}
  saveAccountType: (accountType: string) => {}
  toggleModal: () => void
  isModalVisible: boolean
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

type authScreenProp = StackNavigationProp<AuthStackParamList>

export const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children }: ContextProps) {
  const [user, setUser] = useState<User | null>(null)
  const [pin, setPin] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
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
            pin: snapshot.val().pin,
            accountType: snapshot.val().accountType,
            balance: snapshot.val().balance,
          }

          setUser(data)
        })
    }

    loadStorage()
  }, [user])

  function toggleModal() {
    setIsModalVisible(!isModalVisible)
  }

  async function saveAccountType(accountType: string) {
    const { uid } = user as User

    await database
      .ref('users')
      .child(uid)
      .child('balance')
      .update({
        totalAccountBalance: 0,
        0: {
          income: 0,
          expenses: 0,
        },
        1: {
          income: 0,
          expenses: 0,
        },
        2: {
          income: 0,
          expenses: 0,
        },
        3: {
          income: 0,
          expenses: 0,
        },
        4: {
          income: 0,
          expenses: 0,
        },
        5: {
          income: 0,
          expenses: 0,
        },
        6: {
          income: 0,
          expenses: 0,
        },
        7: {
          income: 0,
          expenses: 0,
        },
        8: {
          income: 0,
          expenses: 0,
        },
        9: {
          income: 0,
          expenses: 0,
        },
        10: {
          income: 0,
          expenses: 0,
        },
        11: {
          income: 0,
          expenses: 0,
        },
      })

    await database
      .ref('users')
      .child(uid)
      .child('accountType')
      .child(accountType)
      .update({
        name: accountType,
        accountBalance: 0,
      })
  }

  async function savePin() {
    const { uid } = user as User

    await database.ref('users').child(uid).update({
      pin: pin,
    })
  }

  async function storageUserUid(data: string) {
    await AsyncStorage.setItem('@expenses_user_uid', data)
  }

  async function signIn({ email, password }: User) {
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
                pin: snapshot.val().pin,
                accountType: snapshot.val().accountType,
                balance: snapshot.val().balance,
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
                  pin: snapshot.val().pin,
                  accountType: snapshot.val().accountType,
                  balance: snapshot.val().balance,
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

  async function signUp({ email, password, name }: User) {
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
        isPinSet: !!user?.pin,
        isAccountSet: !!user?.accountType,
        user,
        pin,
        setPin,
        signUp,
        signUpWithGoogle,
        signIn,
        signInWithGoogle,
        savePin,
        saveAccountType,
        toggleModal,
        isModalVisible,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
