// src/controllers/dashboard.controller.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getDashboardStats = async (req, res) => {
  try {
    const totalVehicles = await prisma.vehicle.count();

    const activeVehicles = await prisma.vehicle.count({ where: { status: true } }); 

    const inactiveVehicles = await prisma.vehicle.count({ where: { status: false } });

    res.status(200).json({
      total: totalVehicles,
      ativos: activeVehicles,
      inativos: inactiveVehicles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar estatísticas do dashboard' });
  }
};