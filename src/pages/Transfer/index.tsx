import React from 'react'

import AddAttachmentIcon from '../../assets/icons/attachment.svg'
import TransactionIcon from '../../assets/icons/transaction-bicolor.svg'
import { Header } from '../../components/Header'
import { colors } from '../../styles/colors'
import {
  AddAttachmentButton,
  AddAttachmentButtonText,
  Card,
  Container,
  Content,
  ContinueButton,
  ContinueButtonText,
  DescriptionInput,
  FromInput,
  FromToInputArea,
  IconCircle,
  Title,
  ToInput,
  Value,
} from './styles'

export function Transfer() {
  return (
    <Container>
      <Header
        color={colors.blue_100}
        textColor={colors.light_100}
        title='Transferência'
      />

      <Content>
        <Title>Quanto?</Title>

        <Value>R$ 0</Value>

        <Card>
          <FromToInputArea>
            <FromInput placeholder='De' />

            <IconCircle>
              <TransactionIcon height={24} width={24} />
            </IconCircle>

            <ToInput placeholder='Para' />
          </FromToInputArea>

          <DescriptionInput placeholder='Descrição' />

          <AddAttachmentButton>
            <AddAttachmentIcon height={32} width={32} />
            <AddAttachmentButtonText>Adicionar arquivo</AddAttachmentButtonText>
          </AddAttachmentButton>

          <ContinueButton>
            <ContinueButtonText>Continue</ContinueButtonText>
          </ContinueButton>
        </Card>
      </Content>
    </Container>
  )
}
