import express from 'express'
import {
  getVehicles,
  createVehicle,
  updateVehicle,
  arquiveVehicle,
  deleteVehicle,
  restoreVehicle,
  getVehicleById,
  getDashboard
} from '../controllers/vehicle.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()


router.use(authMiddleware)
router.get('/', getVehicles)
router.post('/', createVehicle)
router.get('/dashboard', getDashboard)
router.patch('/:id/arquive', arquiveVehicle)
router.patch('/:id/unarquive', restoreVehicle)
router.get('/:id', getVehicleById)
router.put('/:id', updateVehicle)
router.delete('/:id', deleteVehicle)

export default router