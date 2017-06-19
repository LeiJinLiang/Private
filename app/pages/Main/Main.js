import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './main.css'


class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <main>
                <nav className= {styles.nav}>
                    <div className= {styles.item}><Link to="/app">app</Link></div>
                    <div className= {styles.item}><Link to="/image">image</Link></div>
                </nav>
                <div>
                    {this.props.children }
                </div>
            </main>
        )
    }
}


module.exports = Main

