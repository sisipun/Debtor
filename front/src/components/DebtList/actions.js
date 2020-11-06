import { GET_DEBTS, RESET_DEBTS } from './constants'
import API from '../../api';

export const list = () => dispatch => {
    API.get('debts').then(result => {
        dispatch({
            type: GET_DEBTS,
            payload: result.data
        })
    })
}

export const reset = () => ({
    type: RESET_DEBTS,
})