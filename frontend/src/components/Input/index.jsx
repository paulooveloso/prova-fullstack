import React from 'react';
import { InputWrapper, StyledLabel, StyledInput } from './styles';

const Input = ({ label, name, ...props }) => {
  return (
    <InputWrapper>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput name={name} {...props} />
    </InputWrapper>
  );
};

export default Input; 