import React, { useState } from 'react'
import { Map } from 'immutable'

import DatePicker from 'react-datepicker'

import { DEBT_FIELDS } from '../constants'
import { useSaveDebtCallback } from '../hooks'

export const AddDebt = () => {
    const initialDebt = Map({
        [DEBT_FIELDS.DEBTOR]: "",
        [DEBT_FIELDS.VALUE]: 0,
        [DEBT_FIELDS.CURRENCY]: "",
        [DEBT_FIELDS.DEBT_DATE]: new Date(),
        [DEBT_FIELDS.REPAYMENT_DATE]: new Date()
    })
    const [debt, setDebt] = useState(initialDebt)
    const saveDebt = useSaveDebtCallback()

    const handleSubmit = (event) => {
        event.preventDefault()
        saveDebt(debt)
        setDebt(initialDebt)
    }
    const handleChange = (event) => {
        setDebt(debt.setIn([event.target.name], event.target.value))
    }
    const handleDebtDate = (date) => {
        setDebt(debt.setIn([DEBT_FIELDS.DEBT_DATE], date))
    }
    const handleRepaymentDate = (date) => {
        setDebt(debt.setIn([DEBT_FIELDS.REPAYMENT_DATE], date))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name={DEBT_FIELDS.DEBTOR} value={debt.getIn([DEBT_FIELDS.DEBTOR])} onChange={handleChange} />
            <input type="number" name={DEBT_FIELDS.VALUE} value={debt.getIn([DEBT_FIELDS.VALUE])} onChange={handleChange} />
            <input type="text" name={DEBT_FIELDS.CURRENCY} value={debt.getIn([DEBT_FIELDS.CURRENCY])} onChange={handleChange} />
            <DatePicker selected={debt.getIn([DEBT_FIELDS.DEBT_DATE])} onChange={handleDebtDate} />
            <DatePicker selected={debt.getIn([DEBT_FIELDS.REPAYMENT_DATE])} onChange={handleRepaymentDate} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddDebt