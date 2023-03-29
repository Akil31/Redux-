import { ActionTypes } from "../constant/action-type";

const initialState = {
    proudcts: [
        {
            id: '1',
            name: 'Jimin',
        },
        {
            id: '2',
            name: 'Jin',
        },
    ],
};
// console.log(initialState)
export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCTS:
            return {
                ...state.proudcts,
                // payload: proudcts
            };
        default:
            return state;
    }
}