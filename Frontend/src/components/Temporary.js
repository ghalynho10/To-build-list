import React, { Component } from 'react'

export class Temporary extends Component {
    render() {
        return (
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
                        // value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image (Optional)</label>
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
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
                        // value={description}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                </form>
            </div>
        )
    }
}

export default Temporary
