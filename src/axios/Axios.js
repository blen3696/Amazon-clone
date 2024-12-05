import axios from 'axios'

const instance = axios.create({
    //baseURL : 'http://127.0.0.1:5001/clone-f416e/us-central1/api'
    //baseURL : 'http://localhost:5000'
    baseURL : 'https://amazon-api-ozxn.onrender.com/'
})

export default instance