import React, { Component } from 'react'
import Init from '../components/Init'

export class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InitValue: ""
        }
    }

    InitHandleChange = (el) => {
        const value = el.target.value;
        this.setState({
            InitValue: value
        })
        console.log(value)
    }
    render() {
        const { InitValue } = this.state
        return (
            <div>
                <Init
                    value={InitValue}
                    InitHandleChange={this.InitHandleChange}
                />
            </div>
        )
    }
}

export default AppContainer
