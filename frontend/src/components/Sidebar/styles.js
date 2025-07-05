import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #eaeaea;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 16px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const LogoImage = styled.img`
  width: 140px;
  height: auto;
`;

export const NavigationTitle = styled.p`
  font-size: 14px;
  color: #666666;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-left: 8px;
`;

export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavLinkStyled = styled(NavLink).attrs({ end: true })`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 15px;
  color: #666666;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &.active {
    background-color: #f0f7ff;
    color: #1e90ff;
    font-weight: 600;
  }

  &:hover {
    background-color: #f0f7ff;
    color: #1e90ff;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  object-fit: contain;
`;

