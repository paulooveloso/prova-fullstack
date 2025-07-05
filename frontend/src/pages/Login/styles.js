import styled from 'styled-components';

const MAIN_FONT = "'Poppins', sans-serif";      
const TITLE_FONT = "'Inter', sans-serif";       

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #FFFFFF;
  font-family: ${MAIN_FONT}; /* Aplica Poppins em tudo por padrão */
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 48px;
  background-color: #FFFFFF;
  border: 1px solid #00000040;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin: auto;
`;
// Bem vindo de volta 
export const Title = styled.h1`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${TITLE_FONT}; 
  text-align: center;
  margin-top: 0px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  text-align: center;
  min-height: 20px;
`;

export const LogoImage = styled.img`
  max-width: 220px;
  margin: 0 auto 0px auto;
  display: block;
`;
// NÃO TEM UMA CONTA
export const SignUpText = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;
