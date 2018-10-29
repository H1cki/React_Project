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

    bd: () => {
        return axios.post(`${config.url}/api/signin`);

    },

    profileRender: (cookie) => {
        return axios.post(`${config.url}/api/profile`, { cookie: cookie });
    },
    newAvatar: (avatar, img,lastName,firstName,age,role) => {
        let data = new FormData();
        data.append('avatar', avatar);
        data.append('avatarIMG', img);
        data.append('firstName', firstName);
        data.append('lastName', lastName);
        data.append('userAge', age);
        data.append('userRole', role);

        return axios
            .put(
                `${config.url}/api/users/avatar/`,
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