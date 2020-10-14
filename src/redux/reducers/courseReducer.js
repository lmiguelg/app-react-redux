import * as types from '../actions/actionTypes';
import initialState from './initialState'


export default function courseReducer ( state = initialState.courses, action) {
    switch (action.type) {
        case types.CREATE_COURSE_SUCCESS:
            return [ ...state, { ...action.course}];//clone sate and course passed in
        case types.UPDATE_COURSE_SUCCESS:
            return state.map(course => course.id === action.course.id ? action.course : course );
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.DELETE_COURSE_OPTIMISTIC://objetivo é eliminar o curso e depois no return devolver a lista sem o curso eliminadao
            return state.filter(course => course.id !== action.course.id);
        default:
            return state;
    }
}