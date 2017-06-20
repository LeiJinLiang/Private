import { combineReducers } from 'redux'
import { postsByReddit,selectedReddit} from '../pages/Async/reducers'
import {recieveImages} from '../pages/ImageList/reducers'
import { Demo } from '../pages/Demo/reducers'

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit,
    recieveImages,
    Demo
})

export default rootReducer