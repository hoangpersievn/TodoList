import React from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoAction from './TodoAction';

import './Todo.css';

const Todo  = (props) => {

    return (
        <div className="todo">
            <div className="todo-top">
                <TodoInput/>
            </div>
            <TodoList/>
            <div className="todo-bottom">
                <TodoAction/>
            </div>
        </div>
    );
};

export default Todo;