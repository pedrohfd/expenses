import React from 'react'
import Modal from 'react-native-modal'

import AttachmentIcon from '../../assets/icons/attachment.svg'
import {
  AddAttachmentButton,
  AddAttachmentButtonText,
  CategoryPicker,
  CategoryPickerText,
  Container,
  ContinueButton,
  ContinueButtonText,
  DescriptionInput,
  RepeatButtonArea,
  RepeatButtonSubtitle,
  RepeatButtonTextArea,
  RepeatButtonTitle,
  WalletPicker,
  WalletPickerText,
} from './styles'

export function ExpenseIncome() {
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
      </RepeatButtonArea>

      <ContinueButton>
        <ContinueButtonText>Continue</ContinueButtonText>
      </ContinueButton>
    </Container>
  )
}
