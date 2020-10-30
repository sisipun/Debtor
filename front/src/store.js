import { createStore, combineReducers } from 'redux'
import { reducer, REDUCER_NAME } from './components'

export default createStore(combineReducers({
    [REDUCER_NAME]: reducer
}))