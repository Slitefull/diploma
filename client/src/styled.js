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

  #root {
    height: 100%;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  min-height: calc(100% - 146px);
  margin: auto;
  display: flex;
  padding: 0 25px;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.alignCenter ? 'center' : 'normal'};
  align-items: ${props => props.itemsCenter ? 'center' : 'normal'};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: ${props => props.withoutMargin ? 0 : '10px 0 0 0'};
  padding: 7px 20px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.disabled ? 'grey' : '#2ea44f'};
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:hover {
    transition: 0.3s;
    background: ${props => props.disabled ? 'grey' : '#2c974b'};
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
  margin: 20px auto;
  text-align: center;
  border-radius: 5px;
  padding: ${props => props.hasError ? '4px 0' : '15px 0'};
  background: ${props => props.hasError ? '#ffe3e6' : 'transparent'};
  border: ${props => props.hasError ? '1px solid #9d1c232b' : '1px solid #d8dee2'};
`

export const Panel = styled.div`
  background: #8360c3;
  background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);
  background: linear-gradient(to right, #2ebf91, #8360c3);
  padding: 20px 0;
  margin: 0 0 40px;
  font-size: 30px;
  color: #ffffff;
`

export const Count = styled.span`
  font-size: 50px;
  text-align: center;
`

export const Preloader = styled.span`
  display: inline-block;
  width: ${props => props.small ? '22px' : '80px'};
  height: ${props => props.small ? '22px' : '80px'};

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loading 1.2s linear infinite;
    width: ${props => props.small ? '22px' : '64px'};
    height: ${props => props.small ? '22px' : '64px'};
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`