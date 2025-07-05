import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  padding: 10px 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const primaryButtonStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  border-color: ${({ theme }) => theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: #1863C6; // Um tom um pouco mais escuro para o hover
  }
`;

export const StyledButton = styled.button`
  /* Incluímos os estilos base aqui */
  ${baseButtonStyles}

  /* Aplica o estilo correto com base na prop '$variant' */
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return primaryButtonStyles;
      default:
        return primaryButtonStyles;
    }
  }}
`;