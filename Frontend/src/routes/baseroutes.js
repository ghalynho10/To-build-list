import React, { Component } from 'react'
import { Switch } from "react-router-dom";
import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'
import AddProject from '../containers/AddProject'
import Layout from '../Layout/Layout';
import ProjectLayout from '../Layout/ProjectLayout';
import RoutesWithLayout from '../HOC/RoutesWithLayout'


export class baseroutes extends Component {
    render() {
        return (
            <Switch>
                <RoutesWithLayout exact path='/login' component={Login} layout={Layout} />
                <RoutesWithLayout exact path='/register' component={Register} layout={Layout} />
                <RoutesWithLayout exact path='/add' component={AddProject} layout={ProjectLayout} />

                <RoutesWithLayout exact path='/' component={Home} layout={Layout} />
            </Switch>
            // <ProjectLayout>
            //     <Switch>
            //         <Route path='/add' component={AddProject} />
            //     </Switch>
            // </ProjectLayout>

        )
    }
}

export default baseroutes
