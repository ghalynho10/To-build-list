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
                    <div className="bg-white row">
                        <div class="card mb-3 col-md-5 p-0 mr-auto ml-auto mt-5">

                            <h3 class="card-header">Card header</h3>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                            </div>
                            <img style={{ height: "200px", width: "100%", display: "block" }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer text-muted">
                                Created at: 2 days ago
                            </div>

                        </div>

                        {/* <div class="card mb-3 col-md-5 p-0 mr-auto ml-auto mt-5">

                            <h3 class="card-header">Card header</h3>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                            </div>
                            <img style={{ height: "200px", width: "100%", display: "block" }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-footer text-muted">
                                2 days ago
                            </div>

                        </div> */}
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
