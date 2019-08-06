import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <p className="login-text">SCIFI X</p>
                <div className="login-fields">
                    <table border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <input id="name-signup" placeholder="Name" type="text" />                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="email-signup" placeholder="Email" type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="password-signup" placeholder="Password" type="password" />                                    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="dob-signup" placeholder="Birth Date [DD/MM/YYY]" type="text" />                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}          