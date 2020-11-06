import { fromJS } from 'immutable'

import { DEBT_CHANGED, RESET_DEBT, ADD_DEBT_FIELDS } from './constants'

const initialState = fromJS({
    [ADD_DEBT_FIELDS.DEBTOR]: "",
    [ADD_DEBT_FIELDS.VALUE]: 0,
    [ADD_DEBT_FIELDS.CURRENCY]: "",
    [ADD_DEBT_FIELDS.DEBT_DATE]: new Date(),
    [ADD_DEBT_FIELDS.REPAYMENT_DATE]: new Date()
})

export const REDUCER_NAME = 'add-debt'

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEBT_CHANGED: {
            return state.merge(fromJS(action.payload))
        }
        case RESET_DEBT: {
            return initialState
        }
        default:
            return state
    }
}