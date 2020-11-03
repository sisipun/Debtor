import { createStructuredSelector } from 'reselect'

import { REDUCER_NAME } from './reducer'

export const dataSelector = store => store[REDUCER_NAME]

export default createStructuredSelector({
    data: dataSelector
})