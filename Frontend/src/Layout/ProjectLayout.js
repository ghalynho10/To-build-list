import React from 'react'
import HOC from "../HOC/hoc";
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import Temporary from '../components/Temporary';
import './ProjectLayout.css'




class ProjectLayout extends React.Component {
    render() {
        return (
            <HOC>
                <Navbar history={this.props.history} />
                <main style={{ paddingTop: "89px" }}>
                    <div className="row">
                        <div className="d-none d-md-block col bg-primary fixed-top" style={{ height: "88vh", top: "89px", overflowX: "hidden", width: "80px" }}>
                            <div className="options d-block bg-white mt-2">
                                <FontAwesomeIcon icon={faCalendarWeek} />
                            </div>
                            <div className="options d-block bg-white">
                                <span>LmMAOOOO</span>
                            </div>
                            <div className="options d-block"></div>
                        </div>

                        <div className="col article">
                            <div>
                                {this.props.children}
                                <Temporary />
                            </div>
                            <Footer history={this.props.history} />
                        </div>
                    </div>
                </main>

            </HOC>
        )
    }
}


export default withRouter(ProjectLayout)
