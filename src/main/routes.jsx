import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../dashboard/dashboard';


import meuApartamento from '../dashboard/apartamentos/meuApartamento';

export default props => (
    <Switch>
        <Route path="/apartamento" component={meuApartamento} />
        <Route component={Dashboard} />
    </Switch>
)