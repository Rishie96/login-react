import React, { Component } from 'react';
import List from './List';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: List
        }
    }

    addToList = (title) => {        
        if(title === '')
            return;
        let id = this.state.todoList.length+1;
        let status = false;
        let newItem = {
            id,
            title,
            status
        }
        let todoList = this.state.todoList;
        todoList.push(newItem);
        this.setState({todoList});
    }   

    onStatusChange = (index) => {
        let todoList = this.state.todoList;
        todoList[index].status = !todoList[index].status;
        this.setState({todoList});
    }

    onDeleteItem = (index) => {
        let todoList = this.state.todoList;
        todoList.splice(index, 1)
        this.setState({todoList});
    }

    renderWelcomeMessage = () => {        
        let email = sessionStorage.getItem('login');
        let userName = sessionStorage.getItem(email).split(':')[0];
        return (
            <div className="welcome-message">
                Welcome <span className="welcome-user">{userName}</span>                
            </div>
        )
    }

    render() {
        if(!sessionStorage.getItem('login'))
            window.location.replace('/');
        return (
            <Router>
                <div className="welcome-container">
                    {this.renderWelcomeMessage()}
                    <div className="todo-nav">
                        <Link to="/"><button className="btn-add-new">VIEW LIST</button></Link>
                        <Link to="/add-todo"><button className="btn-view-list">ADD NEW</button></Link>
                        <button onClick={this.props.onLogoutHandler} className="btn-logout">LOGOUT</button>
                    </div>
                    <div id="welcome-gif">
                        <img className="welcome-gif" src="https://i.ibb.co/xS79mqM/giphy.gif" />
                        <p className="welcome-hint">Select An Action</p>
                    </div>
                    <div className="todo-container">
                        <Route exact path="/" component={() => <TodoList onDeleteItem={this.onDeleteItem} onStatusChange={this.onStatusChange} todoList={this.state.todoList} />} />
                        <Route path="/add-todo" component={() => <AddTodo addToList={this.addToList} />} />
                    </div>
                </div>
            </Router>
        )
    }
}
