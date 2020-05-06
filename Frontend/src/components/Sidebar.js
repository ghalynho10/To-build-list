import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'

const Sidebar = (props) => {
    return (
        <div className="row">
            <div className="col-md-1 bg-dark">
                <div className="options d-block bg-white">
                    <i className="fas fa-calendar"></i>
                    <FontAwesomeIcon icon={faCalendarWeek} />
                </div>
                <div className="options d-block bg-white">
                    <span>LmMAOOOO</span>
                </div>
                <div className="options d-block"></div>
            </div>
        </div>
    )
}

export default Sidebar
