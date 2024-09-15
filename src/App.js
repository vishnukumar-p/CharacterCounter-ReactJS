import {Component} from 'react'
import {v4} from 'uuid'
import {
  AppContainer,
  FirstContainer,
  HeadingContainer,
  Heading,
  ListContainer,
  ListItem,
  ParaElement,
  ImageElement,
  SecondContainer,
  InputContainer,
  HeadingCounter,
  InputElement,
  ButtonElement,
} from './styledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputS: '',
    objList: [],
  }

  onChangeInput = event => {
    this.setState({inputS: event.target.value})
  }

  onAddButton = () => {
    const {inputS} = this.state
    const sizeLength = inputS.length
    const id = v4()
    const obj = {id, inputS, sizeLength}
    this.setState(prev => ({
      objList: [...prev.objList, obj],
    }))
  }

  render() {
    const {objList, inputS} = this.state
    const imgUrl =
      'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png'
    const altName = 'no user inputs'

    return (
      <AppContainer>
        <FirstContainer>
          <HeadingContainer>
            <Heading>Count the characters like a Boss</Heading>
          </HeadingContainer>

          {objList.length > 0 ? (
            <ListContainer>
              {objList.map(each => (
                <ListItem key={each.id}>
                  <ParaElement>
                    {each.inputS}: {each.sizeLength}
                  </ParaElement>
                </ListItem>
              ))}
            </ListContainer>
          ) : (
            <ImageElement src={imgUrl} alt={altName} />
          )}
        </FirstContainer>
        <SecondContainer onSubmit={this.onAddButton}>
          <HeadingCounter>Character Counter</HeadingCounter>
          <InputContainer>
            <InputElement
              type="text"
              onChange={this.onChangeInput}
              placeholder="Enter the Characters here"
              value={inputS}
            />
            <ButtonElement type="submit">Add</ButtonElement>
          </InputContainer>
        </SecondContainer>
      </AppContainer>
    )
  }
}

export default App
