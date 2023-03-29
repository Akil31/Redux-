import { ActionTypes } from "../constant/action-type";

export const addProudcts = products => {
    return {
        type: ActionTypes.ADD_PRODUCTS,
        payload: products,
    };
}

export const allProducts = products => {
    return {
        type: ActionTypes.ALL_PRODUCTS,
        payload: products,
    };
}