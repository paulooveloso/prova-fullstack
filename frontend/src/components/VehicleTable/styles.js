import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Thead = styled.thead`
  background-color: #f8f9fa;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }

  ${Tbody} & {
    &:hover {
      background-color: #f1f3f5;
    }
  }
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 14px;
`;


export const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;



export const ActionButton = styled.button`
  background: none; /* Sem fundo */
  border: none; /* Sem borda */
  color: ${({ theme }) => theme.colors.primary}; /* Cor do ícone (pode ser ajustada) */
  cursor: pointer;
  font-size: 18px; /* Tamanho do ícone */
  padding: 4px; /* Espaçamento interno para clique */
  display: flex; /* Para alinhar o ícone e o texto */
  align-items: center;
  justify-content: center;
  border-radius: 4px; /* Leve arredondamento */

  &:hover {
    background-color: #e9ecef; /* Um leve fundo ao passar o mouse */
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  /* Estilo para o ícone SVG dentro do botão */
  svg {
    margin: 0; /* Remove margem padrão se houver */
  }

  /* Se você tiver texto junto ao ícone, use isso para espaçar */
  span {
    margin-left: 4px;
  }
`;


export const Status = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${({ $isActive, theme }) => $isActive ? '#E6F4EA' : '#FDEDED'};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.success : theme.colors.error};
`;