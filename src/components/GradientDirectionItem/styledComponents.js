// Style your elements here
import styled from 'styled-components'

export const ButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding-left: 0px;
`

export const DirectionButton = styled.button`
  background-color: white;
  width: 100%;
  margin: 2px;
  padding: 8px;
  color: #1e293b;
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  border-width: 0px;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
