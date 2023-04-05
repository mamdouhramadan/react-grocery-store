import { START_LOADING, STOP_LOADING } from "../actions";

const initialState = {
    loading: false,
    error: null,

};

export default function generalReducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}