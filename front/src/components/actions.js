import { ADD_DEBT } from './constants'

export const addDebt = debt => ({
    type: ADD_DEBT,
    payload: debt
})