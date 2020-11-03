import React from 'react'

import { DEBT_FIELDS } from '../constants'
import { useDebts } from '../hooks'

export const DebtList = () => {
    const {
        data
    } = useDebts()

    return data.map(debt =>
        <div>
            <span>{debt.getIn([DEBT_FIELDS.DEBTOR])}</span>
            <span>{debt.getIn([DEBT_FIELDS.VALUE])}</span>
            <span>{debt.getIn([DEBT_FIELDS.CURRENCY])}</span>
        </div>
    )
}

export default DebtList