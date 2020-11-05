import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import selectors from './selectors'
import { list, reset, save } from './actions'
import { toISODate } from './utils'
import { DEBT_FIELDS } from './constants'

export const useDebts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(list())
        return () => dispatch(reset())
    }, [dispatch])

    return useSelector(selectors)
}

export const useSaveDebtCallback = () => {
    const dispatch = useDispatch()

    return useCallback(
        (debt) => {
            const savedDebt = {
                [DEBT_FIELDS.DEBTOR]: debt.getIn([DEBT_FIELDS.DEBTOR]),
                [DEBT_FIELDS.VALUE]: debt.getIn([DEBT_FIELDS.VALUE]),
                [DEBT_FIELDS.CURRENCY]: debt.getIn([DEBT_FIELDS.CURRENCY]),
                [DEBT_FIELDS.DEBT_DATE]: toISODate(debt.getIn([DEBT_FIELDS.DEBT_DATE])),
                [DEBT_FIELDS.REPAYMENT_DATE]: toISODate(debt.getIn([DEBT_FIELDS.REPAYMENT_DATE]))
            }
            return dispatch(save(savedDebt))
        },
        [dispatch],
    )
}