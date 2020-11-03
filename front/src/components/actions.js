import { ADD_DEBT, GET_DEBTS, RESET_DEBTS } from './constants'

import API from '../api';

export const save = debt => ({
    type: ADD_DEBT,
    payload: debt
})

export const list = debts => ({
    type: GET_DEBTS,
    payload: debts
})

export const reset = () => ({
    type: RESET_DEBTS,
})