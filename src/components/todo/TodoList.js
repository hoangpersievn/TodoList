import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import {TodoContext} from '../../context/TodoContext';

const TodoList = (props) =>  {
    const { todos, matchTodos, isAction } = useContext(TodoContext);

    const showTodos = (todos) => {
        let result = "";

        if(todos.length > 0) {
            result = todos.map( (todo, index) => {
                return (
                    <TodoItem
                        key={index}
                        todo={todo}
                    />
                );
            })
        };
        return result;
    };

    return (
        <div className="todo-list">
            {showTodos(isAction ? matchTodos : todos)}
        </div>
    );

    
};

export default TodoList;