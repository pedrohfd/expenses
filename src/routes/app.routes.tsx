import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeIcon from '../assets/icons/home.svg'
import HomeGrayIcon from '../assets/icons/home-gray.svg'
import TransactionIcon from '../assets/icons/transaction.svg'
import TransactionGrayIcon from '../assets/icons/transaction-gray.svg'
import BudgetIcon from '../assets/icons/pie-chart.svg'
import BudgetGrayIcon from '../assets/icons/pie-chart-gray.svg'
import ProfileIcon from '../assets/icons/user.svg'
import ProfileGrayIcon from '../assets/icons/user-gray.svg'

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
import { CustomTabBar } from '../components/CustomTabBar'
import { Expenses } from '../pages/Expenses'
import { Incomes } from '../pages/Income'
import { Transfer } from '../pages/Transfer'
import fonts from '../styles/fonts'

const BottomRoutes = createBottomTabNavigator<AppStackParamList>()

export function AppRoutes() {
  return (
    <BottomRoutes.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.light_80,
          height: 70,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.medium,
          fontSize: 10,
        },
        tabBarInactiveTintColor: colors.inativeTintColor,
        tabBarActiveTintColor: colors.violet_100,
      }}
    >
      <BottomRoutes.Screen
        name='Home'
        component={Home}
        options={{
          tabBarItemStyle: {
            marginVertical: 11,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeIcon height={32} width={32} />
            ) : (
              <HomeGrayIcon height={32} width={32} />
            ),
        }}
      />
      <BottomRoutes.Screen
        name='Transaction'
        component={Transaction}
        options={{
          tabBarLabel: 'Transações',
          tabBarItemStyle: {
            marginVertical: 11,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TransactionIcon height={32} width={32} />
            ) : (
              <TransactionGrayIcon height={32} width={32} />
            ),
        }}
      />
      {/* <CustomTabBar /> */}
      <BottomRoutes.Screen
        name='SpendingRoutes'
        component={SpendingRoutes}
        options={{
          // tabBarIcon: props => <CustomTabBar {...props} />,
          tabBarLabel: '',
          tabBarButton: props => <CustomTabBar {...props} />,
        }}
      />

      <BottomRoutes.Screen
        name='Budget'
        component={Budget}
        options={{
          tabBarLabel: 'Orçamento',
          tabBarItemStyle: {
            marginVertical: 11,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <BudgetIcon height={32} width={32} />
            ) : (
              <BudgetGrayIcon height={32} width={32} />
            ),
        }}
      />
      <BottomRoutes.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarItemStyle: {
            marginVertical: 11,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ProfileIcon height={32} width={32} />
            ) : (
              <ProfileGrayIcon height={32} width={32} />
            ),
        }}
      />
    </BottomRoutes.Navigator>
  )
}

const StackRoutes = createStackNavigator<AppStackParamList>()

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

function SpendingRoutes() {
  return (
    <StackRoutes.Navigator screenOptions={{ headerShown: false }}>
      <StackRoutes.Screen name='Expense' component={Expenses} />
      <StackRoutes.Screen name='Income' component={Incomes} />
      <StackRoutes.Screen name='Transfer' component={Transfer} />
    </StackRoutes.Navigator>
  )
}
