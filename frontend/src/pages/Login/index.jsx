// src/pages/Login/index.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../../components/Button';
import Input from '../../components/Input';


import logoImage from '../../assets/sua-logo.png';

import { LoginContainer, LoginForm, LogoImage, Title, ErrorMessage, SignUpText } from './styles';


const LoginPage = () => {
  const { login } = useContext(AuthContext);
  
  console.log('Valor de login do contexto:', login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
   
    try {
      await login(email, password);
    } catch (err) {
     
      setError(err.message || 'Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        
        <LogoImage src={logoImage} alt="Logo da Empresa" />

        <Title>Bem-vindo de volta! Insira seus dados.</Title>
        
        <Input
        label={<strong>Email</strong>} 
        type="email"
        name="email"
        id="email"
        placeholder="seuemail@exemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />

       <Input
       label={<strong>Password</strong>} 
       name="password"
       id="password"
       placeholder="••••••••"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       required
    />
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Button type="submit" variant="primary" style={{ marginTop: '16px' }}>
          Entrar
        </Button>
        
    
        <SignUpText>
          Não tem uma conta? <a href="/cadastro">Cadastre-se gratuitamente!</a>
        </SignUpText>

      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;