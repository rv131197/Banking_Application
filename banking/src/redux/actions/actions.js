import { actionTypes } from "./actionTypes"

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.WITHDRAW_MONEY,
            payload: amount
        })
    }
}

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.DEPOSIT_MONEY,
            payload: amount
        })
    }
}