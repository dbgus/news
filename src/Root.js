import React, { Component } from 'react'
import { Route } from "react-router-dom";
import './index.scss'

import { Home } from './pages'

class Root extends Component {
    render() {
        return (
            <div>
                <Route path='/' component={Home} />

            </div>
        )
    }
}

export default Root
