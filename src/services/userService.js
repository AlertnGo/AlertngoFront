import api from './api';

const userServices = {  
    signup: async (user) => {
        return await api.post('/user/signup', user)
    },
    getAll: async () => {
        return await api.get('/user')
    },
    login: async (user) => {
        return await api.post('/user/login', user)
    },
    profil: async (id) => {
        const url = "/user/" + id
        return await api.get (url)
    },
    getAllMyCars: async (id) => {
        return await api.get(`/user/cars/${id}`)
    }
}

export default userServices;