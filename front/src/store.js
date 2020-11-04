import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { reducer, REDUCER_NAME } from './components'

export default createStore(
    combineReducers({[REDUCER_NAME]: reducer}), 
    applyMiddleware(thunk)
)