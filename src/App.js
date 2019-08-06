import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Welcome from './Welcome';
import './App.css';

//https://i.ibb.co/xS79mqM/giphy.gif
let nameReg = /^[a-zA-Z]*$/;
let emailReg = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,4}$/;
let dobReg = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

export default class  App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      data: []
    }
  }

  onClickHandler = (btn1, btn2) => {
    window['message-box'].style.display = 'none';  
    window[btn1].style.display = 'block';
    window[btn2].style.display = 'none';
    this.setState({currentPage: 0});
  }

    onLoginHandler = (event) => {
      let email = window['email'].value;
      let password = window['password'].value;
      let user = sessionStorage.getItem(email);
      if(email === '' || password === '') {
        window['message-box'].style.display = 'block';
        if(email === '')
          window['message-box'].innerHTML = 'All Fields Mandatory';      
        else window['message-box'].innerHTML = 'Authentication Failed';
        event.preventDefault();
        return;
      }
      if(!user) {
        window['message-box'].style.display = 'block';
        window['message-box'].innerHTML = 'Authentication Failed';
        event.preventDefault();
        return;
      }    
      else {
        let upassword = sessionStorage.getItem(email).split(':')[1];
        if(password !== upassword) {
          window['message-box'].style.display = 'block';
          window['message-box'].innerHTML = 'Authentication Failed';
          event.preventDefault();
          return;
        }
      this.setState({data: [email]});
      sessionStorage.setItem('login', email);
      window['message-box'].style.display = 'none';
      window['login'].style.display = 'none';
      window['signup'].style.display = 'none';
    }
  }

  onLogoutHandler = () => {
    sessionStorage.removeItem('login');
    window.location.reload('/');
  }

  onSignUpHandler = (event) => {
    window['message-box'].style.display = 'none';    
    let name = document.getElementById('name-signup');
    let email = document.getElementById('email-signup');
    let password = document.getElementById('password-signup');
    let dob = document.getElementById('dob-signup');
    let currentPage = this.state.currentPage;
    if(currentPage === 0) {
      this.onClickHandler('back', 'login');
      currentPage = 1;
    }    
    else {            
      if(email.value === '' || name.value === '' || password.value === '' || dob.value === '') {        
        window['message-box'].style.display = 'block';
        window['message-box'].innerHTML = 'All Fields Mandatory';
        event.preventDefault();
        return;
      }
      else if(!nameReg.test(name.value) || !emailReg.test(email.value) || !dobReg.test(dob.value)) {
        if(!nameReg.test(name.value)) {
          window['message-box'].style.display = 'block';
          window['message-box'].innerHTML = 'Invalid Name';
        }
        else if(!emailReg.test(email.value)) {
          window['message-box'].style.display = 'block';
          window['message-box'].innerHTML = 'Invalid Email';
        }
        else if(!dobReg.test(dob.value)) {
          window['message-box'].style.display = 'block';
          window['message-box'].innerHTML = 'Invalid Birth Date';
        }
        return;
      }
      let data = name.value+':'+password.value+':'+dob.value;
      sessionStorage.setItem(email.value, data);
      window['message-box'].style.display = 'block';
      window['message-box'].style.animation = 'blinkGreen 2s linear infinite';
      window['message-box'].innerHTML = 'Registered, please wait';
      window['signup'].disabled = true;
      setTimeout(() => {        
        window.location.replace('/');
      }, 3000)
      currentPage = 0;
    }    
    this.setState({currentPage});
  }

  render() {
    return (
      <Router>
        <div className="container-main">
          <div className="container-login">
            <Route exact path="/login-react" component={Login} data={this.state.data} />       
            <Route path="/signup" component={SignUp} />       
            <Route path="/welcome" component={() => <Welcome data={this.state.data} onLogoutHandler={this.onLogoutHandler} />} />       
              <table>
                <tbody>
                  <tr>
                    <td id="message-box" className="message-box" colSpan="2"></td>
                  </tr>
                  <tr id="login">
                      <td><Link to="/welcome"><button className="button-login" onClick={this.onLoginHandler} >Login</button></Link></td>                    
                  </tr>                   
                  <tr>
                    <td><Link to="/signup"><button id="signup" className="button-login" onClick={this.onSignUpHandler} >Sign Up</button></Link></td>
                  </tr>
                  <tr id="back" style={{display: 'none'}}>
                    <td><Link to="/"><i onClick={() => this.onClickHandler('login', 'back')} className="fa fa-arrow-circle-left" style={backStyle}></i></Link></td>
                  </tr>                  
                </tbody>
              </table>        
          </div>
        </div>
      </Router>
    );
  }
}

let backStyle = {
  color: 'rgb(192, 192, 192)',
  fontSize: '1.4vw',
  marginTop: '2vh',
  marginLeft: '0.2vw'
}