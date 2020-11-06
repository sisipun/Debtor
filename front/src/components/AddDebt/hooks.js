import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import selectors from './selectors'
import { save, change } from './actions'
import { toISODate } from './utils'
import { ADD_DEBT_FIELDS } from './constants'

export const useDebt = () => {
    return useSelector(selectors)
}

export const useChangeDebtCallback = () => {
    const dispatch = useDispatch()

    return useCallback(
        (debt) => dispatch(change(debt)),
        [dispatch],
    )
}

export const useSaveDebtCallback = () => {
    const dispatch = useDispatch()

    return useCallback(
        (debt) => {
            const savedDebt = {
                [ADD_DEBT_FIELDS.DEBTOR]: debt.getIn([ADD_DEBT_FIELDS.DEBTOR]),
                [ADD_DEBT_FIELDS.VALUE]: debt.getIn([ADD_DEBT_FIELDS.VALUE]),
                [ADD_DEBT_FIELDS.CURRENCY]: debt.getIn([ADD_DEBT_FIELDS.CURRENCY]),
                [ADD_DEBT_FIELDS.DEBT_DATE]: toISODate(debt.getIn([ADD_DEBT_FIELDS.DEBT_DATE])),
                [ADD_DEBT_FIELDS.REPAYMENT_DATE]: toISODate(debt.getIn([ADD_DEBT_FIELDS.REPAYMENT_DATE]))
            }
            return dispatch(save(savedDebt))
        },
        [dispatch],
    )
}