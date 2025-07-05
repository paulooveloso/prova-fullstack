import React from 'react';
import { CardContainer, CardValue, CardTitle } from './styles';

const InfoCard = ({ title, value }) => {
  return (
    <CardContainer>
      <CardValue>{value}</CardValue>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default InfoCard;