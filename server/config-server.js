import express from 'express'
import routes from './router/router.js'
import {config} from 'dotenv';
// import path from 'path'
import cors from 'cors'
config()

export const App = express();

App.use(cors())
App.use(routes)
// App.use(express.static(path.join(__dirname,'../client/src/dist')))

App.set('port', process.env.PORT || 4000)


