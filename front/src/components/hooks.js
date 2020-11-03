import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { list, reset, save } from './actions'
import selectors from './selectors'
import API from '../api';

export const useDebts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        API.get('debts').then(debts => {
            dispatch(list(debts))
        })
        return () => dispatch(reset())
    }, [dispatch])

    return useSelector(selectors)
}

export const useSaveDebtCallback = () => {
    const dispatch = useDispatch()

    return useCallback(
        (debt) => {
            API.post('debts', debt).then(_ => {
                dispatch(save(debt))
            })
        },
        [dispatch],
    )
}