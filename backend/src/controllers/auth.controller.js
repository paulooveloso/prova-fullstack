import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const register = async (req, res) => {
  const { email, password } = req.body

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) return res.status(400).json({ error: 'Email já cadastrado' })

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { email, password: hashedPassword }
  })

  res.status(201).json({ message: 'Usuário criado com sucesso' })
}


export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' })

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) return res.status(401).json({ error: 'Senha inválida' })

  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1d' })

  const { password: _, ...userWithoutPassword } = user;


  res.status(200).json({ token, user: userWithoutPassword });

 
}
