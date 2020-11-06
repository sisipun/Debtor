import { DEBT_CHANGED, RESET_DEBT } from './constants'
import API from '../../api';

export const save = (debt) => dispatch => {
    API.post('debts', debt).then(_ => {
        dispatch({
            type: RESET_DEBT
        })
    })
}

export const change = (debt) => ({
    type: DEBT_CHANGED,
    payload: debt
})