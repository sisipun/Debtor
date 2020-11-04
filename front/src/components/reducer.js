import { List, fromJS } from 'immutable'

import { GET_DEBTS, RESET_DEBTS } from './constants'

const initialState = List([])

export const REDUCER_NAME = 'debts'

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DEBTS: {
            return fromJS(action.payload)
        }
        case RESET_DEBTS: {
            return initialState
        }
        default:
            return state
    }
}