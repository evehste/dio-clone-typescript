import React from 'react'
import { Controller } from "react-hook-form";
import {InputContainer, InputText, IconContainer, ErrorText } from './styles';
import IInput from './IInput';

const Input = ({leftIcon, name, control, errorMessage,...rest}:IInput) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller
          name={name}
          control={control}
          render={({ field }) =>  <InputText {...field} {...rest} />}
        />
      </InputContainer>

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  )
}

export { Input }; 