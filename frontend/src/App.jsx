import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Routes, Route, Navigate } from 'react-router-dom';


import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
     
        <Route path="/login" element={<LoginPage />} />

     
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;