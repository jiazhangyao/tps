import {INCREASE} from '../constants' 

export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}