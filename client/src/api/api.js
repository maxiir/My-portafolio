import axios from 'axios'

export const sendData = async (values) => 
    await axios.post('https://my-portafolio-beryl.vercel.app/api/sendemail', values) //modificar dependiendo el proveedor de deploy
