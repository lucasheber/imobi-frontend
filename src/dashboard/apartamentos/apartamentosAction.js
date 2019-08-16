import axios from 'axios'
import consts from '../../main/consts'

export const obterApartamentos = () => {
    const request = axios.get(`${consts.BASE_URL}/apartamentos`)

    return {
        type: 'APARTAMENTOS_FETCHED',
        payload: request
    }
}