// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(${props => props.backgroundColor});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 500px;
`
export const Heading = styled.h1`
  font-family: roboto;
  color: white;
  font-size: 28px;
  font-weight: 500;
`

export const Para = styled.p`
  font-family: roboto;
  color: white;
  font-weight: 400;
  font-size: 20px;
`

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 100%;
  padding-left: 0px;
`
export const ColorsContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  width: 55%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ColorName = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: white;
  font-weight: 400;
  margin-bottom: 20px;
`

export const ColorInput = styled.input`
  border-width: 0px;
  padding: 0px;
  margin: 0px;
  outline: none;
  width: 90px;
  height: 40px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  padding: 8px;
  color: #1e293b;
  font-family: roboto;
  font-weight: 500;
  width: 90px;
  background-color: #00c9b7;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
`
