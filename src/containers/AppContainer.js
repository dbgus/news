import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CountryCheckAscny } from "../store/modules/Init";


import News from './newsContainer'
import Init from '../components/Init'

export class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InitValue: ""
        }
    }
    componentWillMount() {
        this.props.CountryCheckAscny();
    }

    InitHandleChange = (el) => {
        const value = el.target.value;
        this.setState({
            InitValue: value
        })
    }

    InitHandleSubmit = (e) => {
        localStorage.setItem('country', this.state.InitValue);
    }

    render() {
        const { InitValue } = this.state
        const { country } = this.props
        return (
            <div>
                {
                    country ?
                        <News />
                        :
                        <Init
                            value={InitValue}
                            Change={this.InitHandleChange}
                            submit={this.InitHandleSubmit}
                        />
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    country: state.init.country,
})

const mapDispatchToProps = {
    CountryCheckAscny: () => CountryCheckAscny()
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)
