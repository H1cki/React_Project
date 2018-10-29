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

    profileRender:(cookie)=> {
        return axios.post(`${config.url}/api/profile`,{cookie:cookie});
    },
    newAvatar: (login, avatar, img) => {
        let data = new FormData();
        data.append('avatar', avatar);
        data.append('avatarIMG', img);
        data.append('firstName', this.state.firstName);
        data.append('lastName', this.state.lastName);
        data.append('userAge', this.state.age);
        data.append('userRole', this.state.role);

        return axios
          .put(
            `${config.url}/api/users/avatar/${login}`,
            data,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          );
      },



  
};

export default api;