import HOC  from './Enhance'
import React from 'react'

const HighOrderComponent = HOC((props) => {
    const _props = { name : props.name, onChange : props.onChange}
    return(
        <div>
            <input type="text" {..._props}/>
            <p>{_props.name}</p>
        </div>
    )}
)


module.exports = HighOrderComponent