import express from 'express'
import routes from './router/router.js'
import {config} from 'dotenv';
config()

export const App = express();

App.use(routes)

App.set('port', process.env.PORT || 4000)


