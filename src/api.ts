import axios from "axios";

const url = 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact2021/'

const api = axios.create({ 
    baseURL: url, 
    timeout: 60 
});

export default api
