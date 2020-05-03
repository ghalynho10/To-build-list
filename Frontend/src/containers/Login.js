import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'
import './Login.css'

import { Link } from 'react-router-dom'


export class Login extends Component {

    state = {
        username: "",
        password: ""
    };


    onSubmit = e => {
        e.preventDefault()
        this.props.onAuth(this.state.username, this.state.password)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { username, password } = this.state;

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <p className="header-h1">Welcome to <span style={{ textDecoration: "underline" }}>Project Tracker</span></p>
                        <p className="pt-3 mt-3" style={{ fontSize: "1.5rem" }}> The number one and ultimate place to build your projects. We help you build your projects by providing the assistance that you need throughout the process. Start building your projects with us today. What are you waiting for?<br /> Let's Have fun!</p>
                        <button type="button" className="btn btn-info pt-3 mt-3"> Read More </button>
                    </div>
                    <div className="col-md-4 header-form mt-3" >
                        <div className="card card-body">
                            <h2 className="text-center">Login</h2>

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label className="lead">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={this.onChange}
                                        value={username}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="lead">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={this.onChange}
                                        value={password}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-block">
                                        Login
                                    </button>
                                </div>
                                <p>
                                    Don't have an account? <Link to="/register">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    token: state.auth.token,
    error: state.auth.error
})

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
