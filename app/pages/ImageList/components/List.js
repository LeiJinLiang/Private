import React from 'react'
import PropTypes from 'prop-types'

const List = ({images}) => (
    <ul>
        {images.map((post,i) =>
            <li key = {i}>{post.title}</li>
        )}
        <button>+</button>
    </ul>
)

List.propTypes = {
    images : PropTypes.array.isRequired
}

export default List



