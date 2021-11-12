import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(SafeAreaView)``

export const Header = styled(LinearGradient)`
  height: 312px;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`

export const Text = styled.Text``
