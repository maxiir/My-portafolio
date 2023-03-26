import express from 'express'
import routes from './router/router.js'
import {config} from 'dotenv';
import {join,dirname} from 'path';
import {fileURLToPath} from 'url';
import cors from 'cors';
config()

export const App = express();
export const __dirname = dirname(fileURLToPath(import.meta.url))

// App.set(express.urlencoded({extended:false}))
App.use(cors())
App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  
App.use(express.json())
App.use(routes)

if (process.env.STATUS === 'production'){
    App.use(express.static(join(__dirname,'./dist')))
    App.get('*',(req,res)=>{
        const index = join(__dirname,'./dist/index.html')
        res.sendFile(index,(err)=>{
            if(err){
                res.status(500).json({err:'problema al enviar el archivo'})
            }
        })
    })
}else{
    App.get('/',(req,res)=>{
        res.send('server running...')
    })
}

//manejo de errores generales
App.use((err,req,res)=>{
    App.status( err.status || 500);
    res.json({err: err.message})
})



App.set('port', process.env.PORT || 4000)


