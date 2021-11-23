import React, { useState } from 'react'
import Modal from 'react-native-modal'
import ToggleSwitch from 'toggle-switch-react-native'

import AttachmentIcon from '../../assets/icons/attachment.svg'
import { colors } from '../../styles/colors'
import {
  AddAttachmentButton,
  AddAttachmentButtonText,
  CategoryPicker,
  CategoryPickerText,
  Container,
  ContinueButton,
  ContinueButtonText,
  DescriptionInput,
  EndPicker,
  EndPickerText,
  FrequencyPicker,
  FrequencyPickerText,
  ModalContent,
  RepeatButtonArea,
  RepeatButtonSubtitle,
  RepeatButtonTextArea,
  RepeatButtonTitle,
  Swipe,
  WalletPicker,
  WalletPickerText,
} from './styles'

export function ExpenseIncome() {
  const [isRepeatable, setIsRepeatable] = useState(false)

  return (
    <Container>
      <CategoryPicker>
        <CategoryPickerText>Categoria</CategoryPickerText>
      </CategoryPicker>

      <DescriptionInput placeholder='Descrição' />

      <WalletPicker>
        <WalletPickerText>Carteira</WalletPickerText>
      </WalletPicker>

      <AddAttachmentButton>
        <AttachmentIcon height={32} width={32} />

        <AddAttachmentButtonText>Adicionar arquivo</AddAttachmentButtonText>
      </AddAttachmentButton>

      <RepeatButtonArea>
        <RepeatButtonTextArea>
          <RepeatButtonTitle>Repetir</RepeatButtonTitle>

          <RepeatButtonSubtitle>Repetir transação</RepeatButtonSubtitle>
        </RepeatButtonTextArea>

        <ToggleSwitch
          isOn={isRepeatable}
          onColor={colors.violet_100}
          offColor={colors.violet_20}
          onToggle={isOn => setIsRepeatable(isOn)}
          thumbOffStyle={{
            backgroundColor: colors.light_80,
          }}
          thumbOnStyle={{
            backgroundColor: colors.light_80,
          }}
        />
      </RepeatButtonArea>

      <ContinueButton>
        <ContinueButtonText>Continue</ContinueButtonText>
      </ContinueButton>

      <Modal
        isVisible={isRepeatable}
        onBackdropPress={() => setIsRepeatable(false)}
        onSwipeComplete={() => setIsRepeatable(false)}
        swipeDirection='down'
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}
      >
        <ModalContent>
          <Swipe />

          <FrequencyPicker>
            <FrequencyPickerText>Frequência</FrequencyPickerText>
          </FrequencyPicker>

          <EndPicker>
            <EndPickerText>Término</EndPickerText>
          </EndPicker>
        </ModalContent>
      </Modal>
    </Container>
  )
}
