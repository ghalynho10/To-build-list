import React, { Component } from 'react'
import { NavLink, withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import HOC from '../HOC/hoc'
import * as actions from '../store/actions/auth'


export class Navbar extends Component {

    logoutHandler = () => {
        this.props.logout()
    }

    render() {
        const registerPageIsActive = !!matchPath(
            this.props.history.location.pathname,
            '/register'
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <NavLink className="navbar-brand" to='/'>Project Tracker</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav ml-auto">
                            {
                                this.props.token !== null ?
                                    <HOC>
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">New Project</a>
                                        </li>
                                        <li className="nav-item">
                                            <a onClick={this.logoutHandler} className="nav-link" style={{ cursor: "pointer" }}>Logout</a>
                                        </li>
                                    </HOC>
                                    :
                                    <HOC>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">ABout</a>
                                        </li>
                                        {
                                            registerPageIsActive ?
                                                <li className="nav-item">
                                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                                </li>
                                                :
                                                <li className="nav-item">
                                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                                </li>
                                        }

                                    </HOC>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
let token = JSON.parse(localStorage.getItem('user'))
const mapStateToProps = (state) => ({
    token: token ? token.token : state.auth.token
})

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.authLogout())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))
