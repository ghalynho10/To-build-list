import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../containers/Login'
import Register from '../containers/Register'

export class baseroutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        )
    }
}

export default baseroutes
