import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import selectors from './selectors'
import { list, reset } from './actions'

export const useDebts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(list())
        return () => dispatch(reset())
    }, [dispatch])

    return useSelector(selectors)
}