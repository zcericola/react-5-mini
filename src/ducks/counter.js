//This holds our initial state and reducer

//Constants (Always in capitals)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//Action Creators
export function increment(amt) {
    //This is the action object
    return {
        type: INCREMENT,
        payload: amt
    }
}

export function decrement(amt) {
    //This is the action object
    return {
        type: DECREMENT,
        payload: amt

    }
}


//initial state
let initialState = {
    currentValue: 0

}

//Our Reducer
//The underlying purpose of our reducer is to return a new state
export default function counter(state = initialState, action) {
    switch(action.type){
        case INCREMENT:
        return Object.assign({}, state, {currentValue: state.currentValue + action.payload});    
        case DECREMENT:
        return Object.assign({}, state, {currentValue: state.currentValue - action.payload});
        default:
        return state;        
    }
}

