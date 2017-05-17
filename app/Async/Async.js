import React, {Component} from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
import reducer from './reducers'
import App from '../Async/containers/App'

const middleware = [ thunk ]
//if (process.env.NODE_ENV !== 'production') {
//    middleware.push(createLogger())
//}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)




class Async  extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    }
}

module.exports = Async
