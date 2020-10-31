import React from 'react'
import { connect } from 'react-redux'

import { getDebts } from '../selectors'
import { DEBT_FIELDS } from '../constants'

export const DebtList = ({
    debts
}) => {
    return debts.map(debt =>
        <div>
            <span>{debt.getIn([DEBT_FIELDS.DEBTOR])}</span>
            <span>{debt.getIn([DEBT_FIELDS.VALUE])}</span>
            <span>{debt.getIn([DEBT_FIELDS.CURRENCY])}</span>
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