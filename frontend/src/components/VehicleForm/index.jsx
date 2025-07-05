import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #181818;
  margin-bottom: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
`;

const InputField = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #0d6efd;
    box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.25);
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #0d6efd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0b5ed7;
  }
`;

const VehicleForm = ({ onFormSubmit, initialData = null }) => {
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');

  useEffect(() => {
    if (initialData) {
      setModel(initialData.name || '');
      setPlate(initialData.plate || '');
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
        {initialData ? 'Salvar Alterações' : 'Cadastrar Veículo'}
      </SubmitButton>
    </Form>
  );
};

export default VehicleForm;
