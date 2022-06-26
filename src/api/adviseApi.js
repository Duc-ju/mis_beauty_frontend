import axiosBase from './axiosBase';

const adviseApi = {
    getAdvise: (params) => {
        const url = '/advise/';
        return axiosBase.post(url, params);
    }
};
export default adviseApi;
