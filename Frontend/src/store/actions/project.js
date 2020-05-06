import * as actionTypes from './actionTypes'
import axios from 'axios'


const createProjectStart = () => {
    return {
        type: actionTypes.CREATE_PROJECT_START
    }
}

const createProjectSuccess = project => {
    return {
        type: actionTypes.CREATE_PROJECT_SUCCESS,
        project: project
    }
}

const createProjectFail = error => {
    return {
        type: actionTypes.CREATE_PROJECT_FAIL,
        error: error
    }
}


const getProjectListStart = () => {
    return {
        type: actionTypes.GET_PROJECTS_LIST_START
    }
}

const getProjectListSuccess = projects => {
    return {
        type: actionTypes.GET_PROJECTS_LIST_SUCCESS,
        projects: projects
    }
}

const getProjectListFail = error => {
    return {
        type: actionTypes.GET_PROJECTS_LIST_FAIL,
        error: error
    }
}


export const getProjects = token => {
    return dispatch => {
        dispatch(getProjectListStart())

        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }

        axios.get("http://localhost:8000/projects/")
            .then(response => {
                const projects = response.data
                dispatch(getProjectListSuccess(projects))
                console.log(projects)
            })
            .catch(err => {
                console.log(err)
                dispatch(getProjectListFail(err))
            })
    }
}

export const createProjects = (token, project) => {
    return dispatch => {
        dispatch(createProjectStart())

        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
        }

        axios.post("http://localhost:8000/projects/", project)
            .then(response => {
                dispatch(createProjectSuccess(response.data))
                console.log(response.data)
            })
            .catch(err => {
                dispatch(createProjectFail(err))
                console.log(err)
            })
    }
}