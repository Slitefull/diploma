import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'


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

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: auto;
  padding: 0 25px;
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
`

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
`

export const Button = styled.button`
  margin: 10px 0 0 0;
  padding: 7px 20px;
  cursor: pointer;
  background: #2ea44f;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:hover {
  transition: 0.3s;
    background: #2c974b;
  }
`

export const Link = styled(NavLink)`
  color: #0366d6;
  
  &:hover {
    text-decoration: underline;
  }
`

export const Window = styled.div`
  width: 100%;
  padding: ${props => props.hasError ? '4px 0' : '15px 0'};
  background: ${props => props.hasError ? '#ffe3e6' : 'transparent'};
  margin: 20px auto;
  text-align: center;
  border: ${props => props.hasError ? '1px solid #9d1c232b' : '1px solid #d8dee2'};
  border-radius: 5px;
`