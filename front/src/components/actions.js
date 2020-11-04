import { GET_DEBTS, RESET_DEBTS } from './constants'
import API from '../api';

export const list = () => dispatch => {
    API.get('debts').then(result => {
        dispatch({
            type: GET_DEBTS,
            payload: result.data
        })
    })
}

export const save = (debt) => dispatch => {
    API.post('debts', debt).then(_ => {
        dispatch(list())
    })
}

export const reset = () => ({
    type: RESET_DEBTS,
})