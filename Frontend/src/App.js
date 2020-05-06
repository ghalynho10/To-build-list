import React from 'react';
// import Layout from './Layout/Layout'
import BaseRoutes from './routes/baseroutes'
import { connect } from 'react-redux'
import * as actions from './store/actions/auth'



class App extends React.Component {

  componentDidMount() {
    this.props.onTryAutoSignUp()
  }

  render() {
    return (
      <BaseRoutes />
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.checkAuthState())
  }
}


export default connect(null, mapDispatchToProps)(App);
