import axios from 'axios'

export const sendData = (values) => {
    axios.post('http://localhost:5000/api/sendemail',values)
} 