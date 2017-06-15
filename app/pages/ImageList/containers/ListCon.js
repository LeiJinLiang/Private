import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions'
import List from '../components/List'

class ListCon extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchPostsIfNeeded('edu_banner'))
    }
    render() {
        const {recieveImages} = this.props
        return(
            <div>
                {recieveImages.result?<List images = {recieveImages.result}/>:'Empty'}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state
}

module.exports = connect(mapStateToProps)(ListCon)