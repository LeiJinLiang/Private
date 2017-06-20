import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPostsIfNeeded } from '../actions'
import List from '../components/List'
import * as listAction from '../actions'

class ListCon extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        this.props.actions.fetchPostsIfNeeded('edu_banner')
    }
    render() {
        const {images} = this.props
        return(
            <div>
                {images.result?<List images = {images.result}/>: 'Empty'}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { images : state.recieveImages}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(listAction,dispatch)
    }
}

module.exports = connect(mapStateToProps,
    mapDispatchToProps)(ListCon)