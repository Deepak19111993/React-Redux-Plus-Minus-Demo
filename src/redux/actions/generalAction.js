import { MINUS_DATA, PLUS_DATA } from "../actionType";

export const increaseValue = (payload) => ({
    type: PLUS_DATA,
    payload
})

export const decreaseValue = (payload) => ({
    type: MINUS_DATA,
    payload
})