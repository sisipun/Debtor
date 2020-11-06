import React from 'react'
import { Link } from "react-router-dom";

import { DEBT_FIELDS } from './constants'
import { useDebts } from './hooks'

export const DebtList = () => {
    const {
        data: debts
    } = useDebts()

    const debtList = debts.map(debt =>
        <div>
            <span>{debt.getIn([DEBT_FIELDS.DEBTOR])}</span>
            <span>{debt.getIn([DEBT_FIELDS.VALUE])}</span>
            <span>{debt.getIn([DEBT_FIELDS.CURRENCY])}</span>
        </div>
    )

    return (
        <div>
            <div>
                <Link to="/add">Add</Link>
            </div>
            <div>
                {debtList}
            </div>
        </div>
    )
}

export default DebtList