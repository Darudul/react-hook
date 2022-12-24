import { actionType } from "./actionType";

export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    quantity: 0,
    feedback: "",
    term: true,
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionType.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,

            };
        case actionType.TOGGLE:
            return {
                ...state,
                term: !state.term,
            }
        default:
            return state
    }

};