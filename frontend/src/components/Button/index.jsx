import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children, variant = 'primary', ...props }) => {
  if (!StyledButton) {
    console.error(' StyledButton não está definido!');
    return null;
  }

  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
