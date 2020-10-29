import React, { useState } from 'react'

import { AddDebt, DebtList } from './components'

export const App = () => {
    const [debts, setDebts] = useState([]);

    return (
        <div>
            <AddDebt
                saveDebt={(debt) => setDebts([...debts, debt])}
            />
            <DebtList
                debts={debts}
            />
        </div>
    )
}

export default App