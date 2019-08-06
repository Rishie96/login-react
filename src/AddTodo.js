import React, { Component } from 'react'

export default class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    onChangeHandler = (event) => {
        let title = event.target.value;
        this.setState({title});
    }

    render() {
        window['welcome-gif'].style.display = 'none';
        return (
            <div className="todo-add">
                <input onChange={this.onChangeHandler} className="add-input" type="text" placeholder="Add to do list" />
                <button onClick={() => this.props.addToList(this.state.title)} className="btn-add-to-list">ADD TO LIST</button>
            </div>
        )
    }
}
