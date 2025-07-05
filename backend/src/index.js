import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import vehicleRoutes from './routes/vehicle.routes.js'
import dashboardRoutes from './routes/dashboard.routes.js';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)
app.use('/vehicles', vehicleRoutes)
app.use('/dashboard', dashboardRoutes);
app.get('/', (req, res) => res.send('API funcionando!'))

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})