import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import InformUser from './componentes/informUser';
import Home from './componentes/home';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={InformUser} />
            <Route path='/Home/' component={Home} />
        </Switch>
    </Router>
)

export default Routes;