import React from 'react'
import { connect } from 'react-redux'

import { getDebts } from '../selectors'

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

const mapStateToProps = state => {
    return {
        debts: getDebts(state)
    }
}

export default connect(
    mapStateToProps,
)(DebtList)