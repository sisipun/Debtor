import { List } from 'immutable'

import { ADD_DEBT } from './constants'

const initialState = List([])

export const REDUCER_NAME = 'debts'

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEBT: {
            return state.push(action.payload)
        }
        default:
            return state
    }
}