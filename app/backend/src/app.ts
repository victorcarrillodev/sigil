import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

//? routes __________________________________________________________ //>

import { env } from './config/env'

// APP initialization __________________________________________________________ //>
const app: Application = express()
