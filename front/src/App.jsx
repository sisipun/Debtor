import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { AddDebt, DebtList } from './components'

import "react-datepicker/dist/react-datepicker.css";

export const App = () => {
    return (
        <Router>
            <Route exact path="/" component={DebtList} />
            <Route path="/add" component={AddDebt} />
        </Router>
    )
}

export default App