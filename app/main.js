import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: require('./Main/Main'),
        childRoutes : [
            require('./Async')
        ]
    } ]
}

console.log('rootRoute',rootRoute)
render((
    <Router
        history={browserHistory}
        routes={rootRoute}
    />
), document.getElementById('root'))