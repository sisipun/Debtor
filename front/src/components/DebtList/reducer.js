import { fromJS } from 'immutable'

import { GET_DEBTS, RESET_DEBTS } from './constants'
import { RESET_DEBT } from '../AddDebt/constants'

const initialState = fromJS([])

export const REDUCER_NAME = 'debt-list'

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEBTS: {
            return fromJS(action.payload)
        }
        case RESET_DEBTS: {
            return initialState
        }
        case RESET_DEBT: {
            return initialState
        }
        default:
            return state
    }
}