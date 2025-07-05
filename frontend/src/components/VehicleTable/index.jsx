import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #0d6efd;
  border-radius: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

const Thead = styled.thead`
  background-color: rgb(255, 255, 255);
`;

const Th = styled.th`
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #343a40;
  padding: 12px 16px;
  border-bottom: 1px solid #dee2e6;
`;

const Td = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #495057;
  border-bottom: 1px solid #f1f3f5;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const StatusBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: ${(props) => (props.$isActive ? "#198754" : "#dc3545")};

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: ${(props) => (props.$isActive ? "#198754" : "#dc3545")};
    border-radius: 50%;
    display: inline-block;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e9ecef;
  }

  span {
    font-size: 14px;
  }
`;

const VehicleTable = ({ vehicles = [], onArchive, onRestore, onDelete, onEdit }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Veículo</Th>
            <Th>Placa</Th>
            <Th>Status</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <tbody>
          {vehicles.map((vehicle) => {
            console.log(vehicle.status);
            return (
              <Tr key={vehicle.id}>
                <Td>{vehicle.name}</Td>
                <Td>{vehicle.plate}</Td>
                <Td>
                  <StatusBadge $isActive={vehicle.status}>
                    {vehicle.status ? "Ativo" : "Inativo"}
                  </StatusBadge>
                </Td>
                <Td>
                  <ActionButtons>
                    <IconButton onClick={() => onEdit(vehicle)} title="Editar">
                      <span>✏️</span>
                    </IconButton>

                    {vehicle.status ? (
                      <IconButton onClick={() => onArchive(vehicle.id)} title="Arquivar Veículo">
                        <span>🗃️</span>
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => onRestore(vehicle.id)} title="Restaurar Veículo">
                        <span>🗃️</span>
                      </IconButton>
                    )}

                    <IconButton onClick={() => onDelete(vehicle.id)} title="Excluir Veículo">
                      <span>🗑️</span>
                    </IconButton>
                  </ActionButtons>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default VehicleTable;
