import api from './api';

const VoitureService = {
    getByNdp: async (ndp) => {
        return await api.get(`/voitures/${ndp}`)
    },
    getAll: async (id) => {
        return await api.get(`/voitures/${id}`)
    }
}

export default VoitureService;

