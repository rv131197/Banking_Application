import { actionTypes } from "../actions/actionTypes";
const INITIAL_STATE = 0;

const accountReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.DEPOSIT_MONEY:
            return state + action.payload;
        case actionTypes.WITHDRAW_MONEY:
            if(state!=0) return state - action.payload;
        default:
            return state;
    }
}

export default accountReducer;