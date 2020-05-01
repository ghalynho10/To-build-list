import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from '../store/actions/auth'
import { Link } from 'react-router-dom'

const emailRegex = RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = ({ formErrors, ...rest }) => {
    let valid = true

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(val => {
        val === "" && (valid = false);
    });

    return valid
}

export class Register extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
        formErrors: {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    };



    onSubmit = e => {
        e.preventDefault();
        // const { username, email, password, password2 } = this.state;
        if (formValid(this.state)) {
            this.props.onSignup(this.state.username, this.state.email, this.state.password, this.state.password2);
        } else {
            console.log("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    onChange = e => {

        const { name, value } = e.target
        let formErrors = this.state.formErrors

        switch (name) {
            case "username":
                formErrors.username =
                    value.length < 6
                        ? 'minimum 6 characters required'
                        : ""
                break
            case 'email':
                formErrors.email =
                    emailRegex.test(value)
                        ? ""
                        : 'Invalid email address'
                break
            case 'password':
                formErrors.password =
                    value.length < 6
                        ? 'minimum 6 characters required'
                        : ""
                break
            case 'password2':
                formErrors.password2 =
                    this.state.password !== value
                        ? "Passwords do not match"
                        : ""
                break
            default:
                break
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    };

    render() {

        const { username, email, password, password2 } = this.state;
        const { formErrors } = this.state

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>username</label>
                            <input
                                type="text"
                                className={formErrors.username.length > 0 ? "form-control is-invalid" : "form-control"}
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                            {formErrors.username.length > 0 && (
                                <span className="text-danger">{formErrors.username}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className={formErrors.email.length > 0 ? "form-control is-invalid" : "form-control"}
                                name="email"
                                onChange={this.onChange}
                                value={email}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="invalid-feedback">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className={formErrors.password.length > 0 ? "form-control is-invalid" : "form-control"}
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="invalid-feedback">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className={formErrors.password2.length > 0 ? "form-control is-invalid" : "form-control"}
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                            />
                            {formErrors.password2.length > 0 && (
                                <span className="invalid-feedback">{formErrors.password2}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null
})

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)
