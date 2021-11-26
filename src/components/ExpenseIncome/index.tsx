import React, { useState, useContext } from 'react'
import Modal from 'react-native-modal'
import ToggleSwitch from 'toggle-switch-react-native'

import AttachmentIcon from '../../assets/icons/attachment.svg'
import ArrowDownIcon from '../../assets/icons/arrow-down-2.svg'
import ShoppingIcon from '../../assets/icons/shopping-bag.svg'
import SubscriptionIcon from '../../assets/icons/recurring-bill.svg'
import FoodIcon from '../../assets/icons/restaurant.svg'
import SalaryIcon from '../../assets/icons/salary.svg'
import TransportationIcon from '../../assets/icons/car.svg'
import { colors } from '../../styles/colors'
import {
  AddAttachmentButton,
  AddAttachmentButtonText,
  CategoryPicker,
  CategoryPickerText,
  CategorySelected,
  CategorySelectedItemButton,
  CategorySelectedItemColor,
  CategorySelectedItemText,
  Container,
  ContinueButton,
  ContinueButtonText,
  DescriptionInput,
  EndPicker,
  EndPickerText,
  FrequencyPicker,
  FrequencyPickerText,
  ModalCategoryContent,
  ModalCategorySelectionButton,
  ModalCategorySelectionButtonText,
  ModalContent,
  ModalWalletButton,
  ModalWalletButtonText,
  ModalWalletContent,
  NextButton,
  NextButtonText,
  RepeatButtonArea,
  RepeatButtonSubtitle,
  RepeatButtonTextArea,
  RepeatButtonTitle,
  Swipe,
  WalletPicker,
  WalletPickerText,
} from './styles'
import { AuthContext } from '../../context/auth'
import { useTheme } from 'styled-components'

interface CategoryProps {
  name: string
  color: string
}

export function ExpenseIncome() {
  const [isRepeatable, setIsRepeatable] = useState(false)
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState<CategoryProps | null>(null)

  const { user } = useContext(AuthContext)

  return (
    <Container>
      {category === null ? (
        <CategoryPicker onPress={() => setIsCategoryModalVisible(true)}>
          <CategoryPickerText>Categoria</CategoryPickerText>

          <ArrowDownIcon height={32} width={32} />
        </CategoryPicker>
      ) : (
        <CategorySelected>
          <CategorySelectedItemButton onPress={() => setCategory(null)}>
            <CategorySelectedItemColor color={category.color} />

            <CategorySelectedItemText>{category.name}</CategorySelectedItemText>
          </CategorySelectedItemButton>

          <ArrowDownIcon height={32} width={32} />
        </CategorySelected>
      )}

      <Modal
        isVisible={isCategoryModalVisible}
        onBackdropPress={() => setIsCategoryModalVisible(false)}
      >
        <ModalCategoryContent>
          <ModalCategorySelectionButton
            color={colors.yellow_20}
            onPress={() => {
              setCategory({
                name: 'Compras',
                color: colors.yellow_100,
              })
              setIsCategoryModalVisible(false)
            }}
          >
            <ShoppingIcon height={50} width={50} />

            <ModalCategorySelectionButtonText color={colors.yellow_100}>
              Compras
            </ModalCategorySelectionButtonText>
          </ModalCategorySelectionButton>
          <ModalCategorySelectionButton
            color={colors.violet_20}
            onPress={() => {
              setCategory({
                name: 'Assinatura',
                color: colors.violet_100,
              })
              setIsCategoryModalVisible(false)
            }}
          >
            <SubscriptionIcon height={50} width={50} />

            <ModalCategorySelectionButtonText color={colors.violet_100}>
              Assinatura
            </ModalCategorySelectionButtonText>
          </ModalCategorySelectionButton>
          <ModalCategorySelectionButton
            color={colors.red_20}
            onPress={() => {
              setCategory({
                name: 'Comida',
                color: colors.red_100,
              })
              setIsCategoryModalVisible(false)
            }}
          >
            <FoodIcon height={50} width={50} />

            <ModalCategorySelectionButtonText color={colors.red_100}>
              Comida
            </ModalCategorySelectionButtonText>
          </ModalCategorySelectionButton>
          <ModalCategorySelectionButton
            color={colors.green_20}
            onPress={() => {
              setCategory({
                name: 'Salário',
                color: colors.green_100,
              })
              setIsCategoryModalVisible(false)
            }}
          >
            <SalaryIcon height={50} width={50} />

            <ModalCategorySelectionButtonText color={colors.green_100}>
              Salário
            </ModalCategorySelectionButtonText>
          </ModalCategorySelectionButton>
          <ModalCategorySelectionButton
            color={colors.blue_20}
            onPress={() => {
              setCategory({
                name: 'Transporte',
                color: colors.blue_100,
              })
              setIsCategoryModalVisible(false)
            }}
          >
            <TransportationIcon height={50} width={50} />

            <ModalCategorySelectionButtonText color={colors.blue_100}>
              Transporte
            </ModalCategorySelectionButtonText>
          </ModalCategorySelectionButton>
        </ModalCategoryContent>
      </Modal>

      <DescriptionInput
        placeholder='Descrição'
        onChangeText={text => setDescription(text)}
        value={description}
      />

      <WalletPicker>
        <WalletPickerText>Carteira</WalletPickerText>

        <ArrowDownIcon height={32} width={32} />
      </WalletPicker>

      <Modal>
        <ModalWalletContent>
          {user?.accountType}
          <ModalWalletButton>
            <ModalWalletButtonText></ModalWalletButtonText>
          </ModalWalletButton>
        </ModalWalletContent>
      </Modal>

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

            <ArrowDownIcon height={32} width={32} />
          </FrequencyPicker>

          <EndPicker>
            <EndPickerText>Término</EndPickerText>

            <ArrowDownIcon height={32} width={32} />
          </EndPicker>

          <NextButton>
            <NextButtonText>Próximo</NextButtonText>
          </NextButton>
        </ModalContent>
      </Modal>
    </Container>
  )
}
