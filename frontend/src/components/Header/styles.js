// src/components/Header/styles.js
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #F8F9FA;
  padding: 20px 40px; 
  border-bottom: 1px solid #E0E0E0; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); 
  position: sticky; 
  top: 0;
  z-index: 1000; 
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0; /* Remove margens padrão do h1 */
`;