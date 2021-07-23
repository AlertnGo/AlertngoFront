import api from './api';

const VoitureService = {
    getByNdp: async (ndp) => {
        return await api.get(`/voitures/${ndp}`)
    }
}

export default VoitureService;

