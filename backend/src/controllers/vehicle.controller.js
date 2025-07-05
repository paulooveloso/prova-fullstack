import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getDashboard = async (req, res) => {
  console.log("🚀 Dashboard endpoint chamado")

  try {
    const total = await prisma.vehicle.count()
    const ativos = await prisma.vehicle.count({ where: { status: true } })
    const inativos = await prisma.vehicle.count({ where: { status: false } })

    res.json({ total, ativos, inativos })
  } catch (error) {
    console.error('🔥 Erro ao obter dashboard:', error)
    res.status(500).json({ error: 'Erro ao obter dashboard' })
  }
}


// Criar Novo Veiculo
export const createVehicle = async (req, res) => {
  const { name, plate, year } = req.body;

  try {
    const vehicle = await prisma.vehicle.create({
      data: {
        name,
        plate,
        year,
        status: true
      },
      select: {
        id: true,
        name: true,
        plate: true,
        year: true,
        status: true
      }
    });

    res.status(201).json(vehicle);
  } catch (error) {
    console.error('Erro ao criar veículo:', error);
    res.status(500).json({ error: 'Erro ao criar veículo' });
  }
};


// listar os veiculos
export const getVehicles = async (req, res) => {
    try {
        const vehicles = await prisma.vehicle.findMany();
        res.status(200).json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar veículos' });
    }
}

// Atualizar Veiculo
export const updateVehicle = async (req, res) => {
    const { id } = req.params;
    const { name, plate } = req.body;

    try {
        const vehicle = await prisma.vehicle.update({
            where: { id: parseInt(id) },
            data: { name, plate }
        });
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar veículo' });
    }
}      
// Arquivar Veiculo
export const arquiveVehicle = async (req, res) => { 
    const { id } = req.params;

    try {
        const vehicle = await prisma.vehicle.update({
            where: { id: parseInt(id) },
            data: { status: false }
        });
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao arquivar veículo' });
    }
}
// Desarquivar Veiculo
export const restoreVehicle = async (req, res) => { 
    const { id } = req.params;

    try {
        const vehicle = await prisma.vehicle.update({
            where: { id: parseInt(id) },
            data: { status: true }
        });
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao desarquivar veículo' });
    }
}      
// Deletar Veiculo
export const deleteVehicle = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.vehicle.delete({
            where: { id: parseInt(id) }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar veículo' });
    }
}

export const getVehicleById = async (req, res) => {
    const { id } = req.params;

    try {
        const vehicle = await prisma.vehicle.findUnique({
            where: { id: parseInt(id) }
        });

        if (!vehicle) {
            return res.status(404).json({ error: 'Veículo não encontrado' });
        }

        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar veículo' });
    }
}

