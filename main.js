import React, { Component } from 'react'
import {render} from 'react-dom'

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <h1>eeee</h1>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
)