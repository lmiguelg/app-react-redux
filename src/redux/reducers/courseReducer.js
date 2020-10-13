export default function courseReducer ( state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            return [ ...state, { ...action.course}];//clone sate and course passed in
        default:
            return state;
    }
}