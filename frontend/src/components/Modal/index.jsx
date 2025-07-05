
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

  const ModalContent = styled.div`
  width: 430px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 32px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  font-family: 'Poppins', sans-serif;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 28px;
  color: #888;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 
  margin-bottom: 28px;const ModalContent
`;

const ModalIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const ModalTitle = styled.h2`
  font-size: 24px; 
  font-weight: 700;
  color: #181818;
  margin: 0;
`;

const Modal = ({ isOpen, onClose, children, title, icon }) => {
  if (!isOpen) return null;
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleContentClick}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>
          {icon && <ModalIcon src={icon} alt="ícone do modal" />}
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;