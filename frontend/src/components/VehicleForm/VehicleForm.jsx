// Arquivo: src/components/VehicleForm/index.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #181818;
  margin-bottom: 8px;
`;

const InputField = styled.input`
  height: 52px;
  padding: 0 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  &::placeholder {
    color: #999999;
  }
`;

const SubmitButton = styled.button`
  height: 52px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #006ae0;
  }
`;

const VehicleForm = ({ onFormSubmit, initialData = null }) => {
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');

  useEffect(() => {
    if (initialData) {
      setModel(initialData.name || '');
      setPlate(initialData.plate || '');
    } else {
      setModel('');
      setPlate('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!model || !plate) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onFormSubmit({ name: model, plate });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Label htmlFor="modelo">Nome do Veículo</Label>
        <InputField
          id="modelo"
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Digite o nome do veículo"
        />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="placa">Placa do Veículo</Label>
        <InputField
          id="placa"
          type="text"
          value={plate}
          onChange={(e) => setPlate(e.target.value.toUpperCase())}
          placeholder="Digite a placa do veículo"
          maxLength="7"
        />
      </InputContainer>

      <SubmitButton type="submit">
        {initialData ? 'Salvar Alterações' : 'Criar Veículo'}
      </SubmitButton>
    </Form>
  );
};

export default VehicleForm;
