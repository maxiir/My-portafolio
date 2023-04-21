import axios from 'axios'

export const sendData = async (values) => 
    await axios.post('https://my-portafolio-production.up.railway.app/api/sendemail', values) //modificar dependiendo el servidor de deploy
