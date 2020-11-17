import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }
 
  body {
    background: #fff;
    font-family: 'circe', Helvetica, Sans-Serif;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: auto;
  padding: 0 25px;
`

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
`

export const Button = styled.button`
  padding: 5px 20px;
  cursor: pointer;
`