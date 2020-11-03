import { List } from 'immutable'

import { GET_DEBTS, ADD_DEBT, RESET_DEBTS } from './constants'

const initialState = List([])

export const REDUCER_NAME = 'debts'

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEBT: {
            return state.push(action.payload)
        }
        case GET_DEBTS: {
            return List(action.payload)
        }
        case RESET_DEBTS: {
            return initialState
        }
        default:
            return state
    }
}