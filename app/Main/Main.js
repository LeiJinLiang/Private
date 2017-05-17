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
                    <div className= {styles.item}><Link to="/">Main-----</Link></div>
                    <div className= {styles.item}><Link to="/calendar">calendar</Link></div>
                    <div className= {styles.item}><Link to="/course/1">course</Link></div>
                    <div className= {styles.item}><Link to="/course/1/list">list</Link></div>
                </nav>
                <div>
                    {this.props.children }
                </div>
            </main>
        )
    }
}


module.exports = Main

