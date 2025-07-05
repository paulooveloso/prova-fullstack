import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import styled from 'styled-components';


import Sidebar from '../components/Sidebar';
import Header from '../components/Header';


const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* Garante que o conteúdo não fique escondido atrás da sidebar fixa */
  margin-left: 250px; /* Largura da sua Sidebar */
`;

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;



const ProtectedRoute = () => {
  const { signed } = useContext(AuthContext);

 
  if (!signed) {
    return <Navigate to="/login" />;
  }


  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>
        
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default ProtectedRoute;