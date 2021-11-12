import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import fonts from '../../styles/fonts'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Animation = styled(LottieView)`
  height: 128px;
`

export const Title = styled.Text`
  margin-top: 16px;

  font-size: 24px;
  font-family: ${fonts.medium};
`
