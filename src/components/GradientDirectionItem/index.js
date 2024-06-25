// Write your code here

import {ButtonContainer, DirectionButton} from './styledComponents'

const GetButton = props => {
  const {value, text, clickedButton, activeDirection} = props

  const updateButton = () => {
    clickedButton(value)
  }

  const isActive = value === activeDirection

  return (
    <ButtonContainer>
      <DirectionButton isActive={isActive} type="button" onClick={updateButton}>
        {text}
      </DirectionButton>
    </ButtonContainer>
  )
}

export default GetButton
