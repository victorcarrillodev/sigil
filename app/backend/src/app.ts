import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

//? routes imports ____________________________________________>

import { env } from './config/env'

// App Initialization
const app: Application = express()

// Global Middlewares
app.use(helmet()) // Security Headers
app.use(
  cors({
    origin: env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)
app.use(express.json()) // Body parser para JSON
app.use(morgan('dev')) // Logger de peticiones HTTP

// Rutas
// Aquí importarás tus rutas modulares más adelante
// app.use('/api/auth', authRoutes);

// Health Check (Útil para saber si el VPS está vivo)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() })
})

// Exports App
export default app
