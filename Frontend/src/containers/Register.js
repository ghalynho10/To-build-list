import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../../actions/auth";


export class Register extends Component {


    render() {
        return (
            <div>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    loading: state.auth.loading
})

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (username, email, password1, password2, firstname, lastname) => dispatch(username, email, password1, password2, firstname, lastname)
    }
}


export default connect()(Register)
