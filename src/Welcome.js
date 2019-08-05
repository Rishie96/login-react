import React, { Component } from 'react'

export default class Welcome extends Component {

    renderWelcomeMessage = () => {        
        return (
            <div className="welcome-message">
                Welcome <span className="welcome-user">Test</span>
            </div>
        )
    }

    renderInfo = () => {
        
    }

    render() {
        if(!sessionStorage.getItem(this.props.data))
            window.location.replace('/');
        return (
            <div className="welcome-container">
                {this.renderWelcomeMessage()}
            </div>
        )
    }
}
