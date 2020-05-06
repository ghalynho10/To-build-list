import * as actionTypes from '../actions/actionTypes'
import updateObject from '../utility'

const initialState = {
    projects: [],
    currentProject: {},
    loading: false,
    error: null
}

/****************  GETTING PROJECTS **********************/
const getProjectsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const getProjectsSuccess = (state, action) => {
    return updateObject(state, {
        projects: action.projects,
        loading: false,
        error: null
    })
}

const getProjectsFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

/****************  CREATING PROJECTS **********************/

const createProjectsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const createProjectsSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: null
    })
}

const createProjectsFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROJECTS_LIST_START: return getProjectsStart(state, action)
        case actionTypes.GET_PROJECTS_LIST_SUCCESS: return getProjectsSuccess(state, action)
        case actionTypes.GET_PROJECTS_LIST_FAIL: return getProjectsFail(state, action)

        case actionTypes.CREATE_PROJECT_START: return createProjectsStart(state, action)
        case actionTypes.CREATE_PROJECT_SUCCESS: return createProjectsSuccess(state, action)
        case actionTypes.CREATE_PROJECT_FAIL: return createProjectsFail(state, action)
        default:
            return state
    }
}

export default reducer
