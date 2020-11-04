import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { list, reset, save } from './actions'
import selectors from './selectors'

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
        (debt) => dispatch(save(debt)),
        [dispatch],
    )
}