import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Para,
  ButtonList,
  ColorsContainer,
  ColorContainer,
  ColorName,
  ColorInput,
  GenerateButton,
} from './styledComponents'

import GetButton from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'top',
    gradient: 'to top, #8ae323, #014f7b',
  }

  updateButton = value => {
    this.setState({direction: value})
  }

  updateColor1 = event => {
    this.setState({color1: event.target.value})
  }

  updateColor2 = event => {
    this.setState({color2: event.target.value})
  }

  updateBackground = () => {
    const {direction, color1, color2} = this.state

    this.setState({gradient: `to ${direction}, ${color1}, ${color2}`})
  }

  render() {
    const {direction, color1, color2, gradient} = this.state
    return (
      <MainContainer backgroundColor={gradient} data-testid="gradientGenerator">
        <SubContainer>
          <Heading>Generate a CSS color Gradient</Heading>
          <Para>Choose Direction</Para>
          <ButtonList>
            {gradientDirectionsList.map(eachItem => (
              <GetButton
                key={eachItem.directionId}
                value={eachItem.value}
                text={eachItem.displayText}
                activeDirection={direction}
                clickedButton={this.updateButton}
              />
            ))}
          </ButtonList>
          <Para>Pick the Colors</Para>
          <ColorsContainer>
            <ColorContainer>
              <ColorName htmlFor="colorInput1">{color1}</ColorName>
              <ColorInput
                onChange={this.updateColor1}
                type="color"
                id="colorInput1"
                value={color1}
              />
            </ColorContainer>

            <ColorContainer>
              <ColorName htmlFor="colorInput2">{color2}</ColorName>
              <ColorInput
                id="colorInput2"
                type="color"
                onChange={this.updateColor2}
                value={color2}
              />
            </ColorContainer>
          </ColorsContainer>

          <GenerateButton type="button" onClick={this.updateBackground}>
            Generate
          </GenerateButton>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
