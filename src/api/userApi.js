import axiosBase from './axiosBase';

const userApi = {
    login: (params) => {
        const url = '/token/';
        return axiosBase.post(url, params);
    },
    getInfo: (params) => {
        const url = `/customers/${params}/`;
        return axiosBase.get(url);
    },
    register: (params) => {
        const url = '/customers/';
        return axiosBase.post(url, params);
    },
    updateProfile: (userId, params) => {
        const url = `/customers/${userId}/profile/`;
        return axiosBase.patch(url, params);
    }
};
export default userApi;
