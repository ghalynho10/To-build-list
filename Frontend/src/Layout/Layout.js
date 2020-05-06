import React, { Component } from 'react'
import HOC from "../HOC/hoc";
import Navbar from '../components/Navbar'

export class Layout extends Component {
    render() {
        return (
            <HOC>
                <Navbar />
                <main>
                    {/* <Sidebar /> */}
                    {this.props.children}
                </main>
            </HOC>
        )
    }
}


export default Layout
