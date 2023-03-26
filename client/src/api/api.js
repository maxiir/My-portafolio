import axios from 'axios'

export const sendData = async (values) => 
    await axios.post('https://my-portafolio-hm8z.vercel.app/api/sendemail', values)
