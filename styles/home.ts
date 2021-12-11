import styled from 'styled-components'

export const Button = styled.button`
  background-color: purple;
  width:200px;
  height:200px;
`

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  transition: all 1s
`