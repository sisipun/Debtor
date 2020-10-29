import React from 'react'

export const DebtList = ({
    debts
}) => {
    return debts.map(debt =>
        <div>
            <span>{debt.debtor}</span>
            <span>{debt.value}</span>
            <span>{debt.currency}</span>
        </div>
    )
}

export default DebtList