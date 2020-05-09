import React from 'react'
import { Route, Redirect } from "react-router-dom"

const RoutesWithLayout = ({ component: Component, layout: Layout, redirect, ...rest }) => {
    return (
        redirect ? (
            <Redirect to={redirect} />
        ) : (
                <Route {...rest} render={props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )} />
            )
    )
}

export default RoutesWithLayout
