import React,{ Component } from 'react'

const HOC = WrappedComponent => (
    class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                name : ''
            }
        }

        onNameChange = (e)=> {
            this.setState({
                name : e.target.value
            })
        }

        render() {
            const newProps = { value : this.state.name, onChange : this.onNameChange}
            return (
                <WrappedComponent {...this.props} {...newProps} {...this.state}/>
            )
        }
    }
)

export default HOC