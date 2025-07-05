

import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import api from '../../services/api';
import VehicleTable from '../../components/VehicleTable';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import VehicleForm from '../../components/VehicleForm';
import { useNavigate } from 'react-router-dom';

import carIcon from '../../assets/icons/carro.png';
import totalIcon from '../../assets/icons/total-icon.png';
import ativosIcon from '../../assets/icons/ativos-icon.png';
import inativosIcon from '../../assets/icons/inativos-icon.png';
import maisIcon from '../../assets/icons/simbolodemais.png';

const UserIconContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 50px;
  cursor: pointer;

  &:hover::after {
    content: 'Sair';
    position: absolute;
    top: 70%;
    right: 0;
    background: #fff;
    color: #333;
    border: 1px solid #ccc;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PageContainer = styled.div`
  font-family: 'Inter', sans-serif;
  max-width: 1343px;
  margin: 0 auto;
  padding: 20px 24px;
  padding-left: 10px; 
  position: relative;
`;

const Header = styled.div`
  position: absolute;
  top: 64px;
  left: 10px;
  z-index: 10;

  h1 {
    font-size: 50px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    width: 291px;
    height: 72px;
  }

  p {
    font-size: 18px;
    color: #666666;
    margin: 8px 0 0;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 180px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Card = styled.div`
  width: 298px;
  height: 105px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0 0 32px rgba(208, 210, 218, 0.15);
  display: flex;
  align-items: center;
  gap: 16px;

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #f5f7fe;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card-title {
    font-size: 14px;
    color: #666666;
  }
  .card-value {
    font-size: 28px;
    color: #1a1a1a;
    font-weight: bold;
  }
`;

const AddButton = styled(Button)`
  margin-bottom: 24px;
  margin-left: 10px;
  width: auto;
  height: 35px;
  padding: 0 8px; 
  font-size: 16px;
  font-weight: bold;
  background-color: #007Aff;
  color: #fff;
  border-radius: 27px;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 10px;
  white-space: nowrap;
`;
const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  overflow-x: auto; 
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.04);
  padding: 16px 24px;
`;


const LogoutModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  
  &.confirm {
    background-color: #d9534f;
    color: white;
    border-color: #d9534f;
  }

  &.cancel {
    background-color: #f0f0f0;
    color: #333;
  }
`;

const InfoCard = ({ title, value, icon }) => (
  <Card>
    <div className="icon-wrapper">
      <img src={icon} alt={`${title} ícone`} width="50" height="50" />
    </div>
    <div className="card-content">
      <span className="card-title">{title}</span>
      <strong className="card-value">{value}</strong>
    </div>
  </Card>
);

// ====================================================================
// COMPONENTE DASHBOARD CORRIGIDO E ORGANIZADO
// ====================================================================

const Dashboard = () => {
  // --- SEÇÃO DE ESTADOS ---
  const [stats, setStats] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const navigate = useNavigate();

  // --- SEÇÃO DE FUNÇÕES (HANDLERS) ---
  const handleLogout = () => { setIsLogoutModalOpen(true); };
  const executeLogout = () => { localStorage.removeItem('token'); navigate('/login'); };
  
  const handleEditClick = (vehicle) => {
    setEditingVehicle(vehicle); 
    setIsEditModalOpen(true);   
  };

  const fetchData = useCallback(async () => {
    try {
      const [statsResponse, vehiclesResponse] = await Promise.all([
        api.get('/dashboard/stats'),
        api.get('/vehicles'),
      ]);
      setStats(statsResponse.data);
      setVehicles(vehiclesResponse.data);
    } catch (err) {
      setError('Não foi possível carregar os dados do dashboard.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreateVehicle = async (vehicleData) => {
    try {
      await api.post('/vehicles', vehicleData);
      setIsVehicleModalOpen(false);
      fetchData();
    } catch (err) { console.error('Erro ao criar veículo:', err); }
  };

  const handleUpdateVehicle = async (formData) => {
    if (!editingVehicle) return;
    try {
      await api.patch(`/vehicles/${editingVehicle.id}`, formData);
      setIsEditModalOpen(false);
      fetchData();
    } catch (err) { console.error('Erro ao atualizar veículo:', err); }
  };

  const handleArchiveVehicle = async (vehicleId) => { try { await api.patch(`/vehicles/${vehicleId}/arquive`); fetchData(); } catch (err) { console.error('Erro ao arquivar veículo:', err); } };
  const handleRestoreVehicle = async (vehicleId) => { try { await api.patch(`/vehicles/${vehicleId}/unarquive`); fetchData(); } catch (err) { console.error('Erro ao restaurar veículo:', err); } };
  const handleDeleteVehicle = async (vehicleId) => {
    const isConfirmed = window.confirm('Tem certeza que deseja excluir este veículo? Esta ação não pode ser desfeita.');
    if (isConfirmed) { try { await api.delete(`/vehicles/${vehicleId}`); fetchData(); } catch (err) { console.error('Erro ao deletar veículo:', err); alert('Não foi possível excluir o veículo.'); } }
  };

  // --- SEÇÃO DE EFEITOS ---
  useEffect(() => { fetchData(); }, [fetchData]);

  // --- SEÇÃO DE RENDERIZAÇÃO ---
  if (loading) return <p>Carregando dashboard...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <PageContainer>
      <UserIconContainer onClick={handleLogout}>
        <span role="img" aria-label="user">👤</span>
      </UserIconContainer>
      <Header>
        <h1>Olá Paulo,</h1>
        <p>Cadastre e gerencie seus veículos</p>
      </Header>
      {stats && (
        <CardsContainer>
          <InfoCard title="Total" value={stats.total} icon={totalIcon} />
          <InfoCard title="Ativos" value={stats.ativos} icon={ativosIcon} />
          <InfoCard title="Inativos" value={stats.inativos} icon={inativosIcon} />
        </CardsContainer>
      )}
      <AddButton onClick={() => setIsVehicleModalOpen(true)}>
        <img src={maisIcon} alt="Adicionar" style={{ width: '22px', height: '25px' }} />
        Cadastrar Veículo
      </AddButton>
      <TableWrapper>
        <VehicleTable
          vehicles={vehicles}
          onArchive={handleArchiveVehicle}
          onRestore={handleRestoreVehicle}
          onDelete={handleDeleteVehicle}
          onEdit={handleEditClick}
        />
      </TableWrapper>

      <Modal isOpen={isVehicleModalOpen} onClose={() => setIsVehicleModalOpen(false)} title="Cadastrar Novo Veículo" icon={carIcon}>
        <VehicleForm onFormSubmit={handleCreateVehicle} />
      </Modal>

      
      {isLogoutModalOpen && (
        <Modal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} title="Confirmar Saída">
          <div>
            <p>Você tem certeza que deseja sair do sistema?</p>
            <LogoutModalActions>
              <ModalButton className="cancel" onClick={() => setIsLogoutModalOpen(false)}>Cancelar</ModalButton>
              <ModalButton className="confirm" onClick={executeLogout}>Sim, Sair</ModalButton>
            </LogoutModalActions>
          </div>
        </Modal>
      )}

    
      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title={`Editando Veículo: ${editingVehicle?.name}`}
          icon={carIcon}
        >
          <VehicleForm
            onFormSubmit={handleUpdateVehicle}
            initialData={editingVehicle}
          />
        </Modal>
      )}
    </PageContainer>
  );
};

export default Dashboard;