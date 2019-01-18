import React, { Component } from 'react';
import SignNavigation from './SignNavigation'

class MainSign extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <SignNavigation />
        )
    }

}

export default MainSign;