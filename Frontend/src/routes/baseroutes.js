import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'

export class baseroutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />

                <Route exact path='/' component={Home} />
            </Switch>
        )
    }
}

export default baseroutes
