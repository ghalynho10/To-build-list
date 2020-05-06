import React from 'react'
import HOC from "../HOC/hoc";
import { Navbar } from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import { withRouter } from 'react-router-dom'




class ProjectLayout extends React.Component {
    render() {
        return (
            <HOC>
                <Navbar history={this.props.history} />
                <main>
                    <Sidebar />
                    {this.props.children}
                </main>
            </HOC>
        )
    }
}


export default withRouter(ProjectLayout)
