import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="mt-5">
                    <p className="display-4" style={{ fontSize: "2rem", color: "black", textTransform: "uppercase", fontWeight: "bold" }}>Latest Project</p>
                    <div className="row bg-white pt-3 pb-3">
                        <div className="col-md-2">
                            <img src="https://via.placeholder.com/150" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h4 className="display-5">Project Title</h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis adipisci fuga amet velit eveniet! Commodi, quasi. Iste beatae, quos magni inventore numquam fugit dolore similique pariatur. Possimus iste repellat amet.</p>
                        </div>

                    </div>
                </div>

                <div className="mt-5">
                    <p className="display-5" style={{ fontSize: "2rem", color: "black", textTransform: "uppercase" }}>Recent Projects</p>
                    <div className="bg-white">

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
