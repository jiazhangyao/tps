import {SET_AUTH} from "../actions/constrants";
import {INCREASE} from '../constants' 

const initialState={
    num:1,
    add:'hello react'
}

function getUserID() {
    let nowID = localStorage.getItem("user_id");
    if (nowID === undefined || nowID === null) {
        return 0
    } else {
        return parseInt(nowID)
    }
}


function auth(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {...state, authed: true};
            break;
        case INCREASE:
            return Object.assign({}, state, { num: state.num + action.amount })
            break;
        default:
            if (getUserID() !== 0) {
                return {...state, authed: true}
            }
            return state
    }
}



export  default auth