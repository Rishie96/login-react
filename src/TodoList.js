import React, { Component } from 'react'

export default class TodoList extends Component {

    renderTodoList = () => {
        let list = this.props.todoList;
        return list.map((item, index) => {
            return (
                <div className="todo-item" key={item.id}>                    
                    <span className="todo-title">                    
                        {item.status? <span onClick={() => this.props.onStatusChange(index)} style={{ color: '#ab3232', cursor: 'pointer' }}>{`\u2718`}</span>: <span onClick={() => this.props.onStatusChange(index)} style={{ color: '#3ba34a', cursor: 'pointer' }}>{`\u2714`}</span>}            
                        {item.status? <p style={{textDecoration: 'line-through', display: 'inline'}}>{item.title}</p>: <p style={{display: 'inline'}}>{item.title}</p>}
                    </span>
                    <button onClick={() => this.props.onDeleteItem(index)} className="todo-remove">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            )
        })
    }

    render() {
        window['welcome-gif'].style.display = 'none';
        return (
            <div>
                {this.renderTodoList()}
            </div>
        )
    }
}
