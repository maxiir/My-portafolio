import axios from 'axios'

export const sendData = (values) => {
    axios.post('https://my-portafolio-hm8z.vercel.app/api/sendemail',values)
} 