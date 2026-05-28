import http from 'http'
import { env } from './config/env'

import app from './app'
// // Cargar variables de entorno
// dotenv.config()

const PORT = env.PORT || 3000

// Crear servidor HTTP crudo
const httpServer = http.createServer(app)

// Levantar el servidor
httpServer.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
})
