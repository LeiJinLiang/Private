import { combineReducers } from 'redux'
import {REQUEST_POSTS, RECEIVE_POSTS} from '../actions'


export  const  recieveImages = (state = [],action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.reddit
        default:
            return state
    }
}

