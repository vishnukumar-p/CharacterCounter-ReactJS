import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`
export const FirstContainer = styled.div`
  display: flex;
  width: 50vw;
  flex-direction:column:
  justify-content: flex-start;
  align-items:center;
`
export const HeadingContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  margin: 10px;
`
export const ListItem = styled.li`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: transparent;
`
export const ParaElement = styled.p`
  color: #334155;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: normal;
`
export const ImageElement = styled.img`
  width: 100%;
`
export const SecondContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #0f172a;
  background-size: cover;
`
export const InputElement = styled.input`
  border: none;
  background-color: white;
  border-radius: 10px;
  width: 150px;
  color: #475569;
  font-size: 10px;
  font-family: 'Roboto';
  padding: 10px;
`
export const HeadingCounter = styled.h1`
  color: #ffc533;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ButtonElement = styled.button`
  border: none;
  background-color: #ffc533;
  color: #272c47;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
`
