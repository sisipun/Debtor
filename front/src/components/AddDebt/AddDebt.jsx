import React, { useState } from 'react'

export const AddDebt = ({
    saveDebt,
}) => {
    const initialDebt = {
        debtor: "",
        value: 0,
        currency: ""
    }
    const [debt, setDebt] = useState(initialDebt)

    const handleSubmit = (event) => {
        event.preventDefault()
        saveDebt(debt)
        setDebt(initialDebt)
    }
    const handleChange = (event) => {
        setDebt({...debt, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="debtor" value={debt.debtor} onChange={handleChange}/>
            <input type="number" name="value" value={debt.value} onChange={handleChange}/>
            <input type="text" name="currency" value={debt.currency} onChange={handleChange}/>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default AddDebt