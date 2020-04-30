import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../containers/Login'

export class baseroutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
            </Switch>
        )
    }
}

export default baseroutes
