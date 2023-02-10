import {App} from './config-server.js'

App.listen( App.get('port'), () =>{
    console.log('server running... in port:', App.get('port'))
})