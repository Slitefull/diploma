import styled from 'styled-components'
import { Field } from 'redux-form';
import { RiErrorWarningFill } from 'react-icons/ri'


export const Form = styled.form`
  background: #f6f8fa;
  padding: 20px;
  border: 1px solid #eaecef;
  border-radius: 5px;
`

export const FormWrapper = styled.div`
  width: 300px;
  margin: 20px auto;
`

export const FormField = styled(Field)`
  width: 100%;
  font-family: 'circe';
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  background: #ffffff;
  outline: none;
  padding: 5px 0 5px 10px;
  border: 1px solid #e1e4e8;
  
  &:focus {
    background: #e8f0fe;
    box-shadow: 0 0 4px #0366d6;
  }
`

export const FormFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const FormTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`

export const FormLabel = styled.label`
  font-weight: 500;
`

export const FormError = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
`

export const FormErrorIcon = styled(RiErrorWarningFill)`
  width: 100%;
`

export const FormErrorMessage = styled.div`
  color: #000000;
  font-weight: 300;
  font-size: 14px;
  position: absolute;
  right: -270px;
  display: inline-table;
  width: 220px;
`