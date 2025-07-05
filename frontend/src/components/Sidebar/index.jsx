import React from 'react';
import logoImage from '../../assets/sua-logo.png';
import dashboardIcon from '../../assets/icons/dashboard.png';
import relatoriosIcon from '../../assets/icons/relatorios.png';

import {
  SidebarContainer,
  LogoContainer,
  LogoImage,
  NavigationTitle,
  NavMenu,
  NavLinkStyled,
  Icon
} from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <LogoContainer>
          <LogoImage src={logoImage} alt="Logo da Empresa" />
        </LogoContainer>

        <NavigationTitle>Navegação</NavigationTitle>

        <NavMenu>
          <li>
            <NavLinkStyled to="/dashboard">
              <Icon src={dashboardIcon} alt="Dashboard" />
              Dashboard
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/reports">
              <Icon src={relatoriosIcon} alt="Relatórios" />
              Relatórios
            </NavLinkStyled>
          </li>
        </NavMenu>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
