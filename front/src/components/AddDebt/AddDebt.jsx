import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useHistory } from 'react-router-dom';
import { Map } from 'immutable'

import { ADD_DEBT_FIELDS } from './constants'
import { useDebt, useChangeDebtCallback, useSaveDebtCallback } from './hooks'

export const AddDebt = () => {
    const {
        data: debt
    } = useDebt()
    const changeDebt = useChangeDebtCallback()
    const saveDebt = useSaveDebtCallback()

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        saveDebt(debt)
        history.push("/")
    }
    const handleChange = (event) => {
        changeDebt(debt.setIn([event.target.name], event.target.value))
    }
    const handleDebtDate = (date) => {
        changeDebt(debt.setIn([ADD_DEBT_FIELDS.DEBT_DATE], date))
    }
    const handleRepaymentDate = (date) => {
        changeDebt(debt.setIn([ADD_DEBT_FIELDS.REPAYMENT_DATE], date))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name={ADD_DEBT_FIELDS.DEBTOR} value={debt.getIn([ADD_DEBT_FIELDS.DEBTOR])} onChange={handleChange} />
            <input type="number" name={ADD_DEBT_FIELDS.VALUE} value={debt.getIn([ADD_DEBT_FIELDS.VALUE])} onChange={handleChange} />
            <input type="text" name={ADD_DEBT_FIELDS.CURRENCY} value={debt.getIn([ADD_DEBT_FIELDS.CURRENCY])} onChange={handleChange} />
            <DatePicker selected={debt.getIn([ADD_DEBT_FIELDS.DEBT_DATE])} onChange={handleDebtDate} />
            <DatePicker selected={debt.getIn([ADD_DEBT_FIELDS.REPAYMENT_DATE])} onChange={handleRepaymentDate} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddDebt