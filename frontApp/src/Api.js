import axios from 'axios';
import config from './config';

const api = {
    registerUser: (data) => {
        return axios.post(
            `${config.url}/api/signup`, data);
    },

    signIn: (user, password) => {
        return axios.post(`${config.url}/api/signin`, 
            user, password);
            
    },


    bd:()=>{
        return axios.post(`${config.url}/api/signin`);
    },
    



  
};

export default api;