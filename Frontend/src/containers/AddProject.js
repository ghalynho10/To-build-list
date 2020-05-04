import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AddProject extends Component {

    state = {
        title: "",
        description: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        const { title, description } = this.state;

        return (
            <div className="container">
                <div className="card card-body mt-4 mb-4">
                    <h2>Add New Project</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="form-control-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                onChange={this.onChange}
                                value={title}
                            />
                        </div>
                        <div className="form-group">
                            <label>Image (Optional)</label>
                            <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile02" />
                                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="description"
                                onChange={this.onChange}
                                value={description}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
