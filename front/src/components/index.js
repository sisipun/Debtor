import { combineReducers } from 'redux'

import AddDebt from './AddDebt'
import DebtList from './DebtList'
import { reducer as debtListReducer, REDUCER_NAME as DEBT_LIST_REDUCER_NAME } from './DebtList/reducer'
import { reducer  as addDebtReducer, REDUCER_NAME as ADD_DEBT_REDUCER_NAME } from './AddDebt/reducer'

const reducers = combineReducers({
    [DEBT_LIST_REDUCER_NAME]: debtListReducer,
    [ADD_DEBT_REDUCER_NAME]: addDebtReducer,
})

export {
    AddDebt,
    DebtList,
    reducers,
}