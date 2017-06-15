import { combineReducers } from 'redux'
import { postsByReddit,selectedReddit} from '../pages/Async/reducers'
import {recieveImages} from '../pages/ImageList/reducers'

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit,
    recieveImages
})

export default rootReducer