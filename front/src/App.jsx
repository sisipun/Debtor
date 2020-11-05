import React from 'react'

import { AddDebt, DebtList } from './components'

import "react-datepicker/dist/react-datepicker.css";

export const App = () => {
    return (
        <div>
            <AddDebt />
            <DebtList />
        </div>
    )
}

export default App