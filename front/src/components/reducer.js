import { ADD_DEBT } from './constants'

const initialState = []

export const REDUCER_NAME = 'debts'

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DEBT: {
            return [
                action.payload,
                ...state,
            ]
        }
        default:
            return state
    }
}