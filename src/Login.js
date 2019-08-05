import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <p className="login-text">SCIFI X</p>
                <div className="login-fields">
                    <table border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <input id="email" placeholder="Email" type="text" />                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="password" placeholder="Password" type="password" />
                                </td>
                            </tr>                      
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}          