import React, { useContext } from 'react';

import CheckIo from '../../icons/check.svg';
import UnCheckIo from '../../icons/uncheck.svg';
import { TodoContext } from '../../context/TodoContext';

const TodoItem = (props) => {
    const { todo } = props;
    const { actToggleComplete } = useContext(TodoContext);
    return (
        <div className="todo-item">
            <img 
                className="icon-check" 
                src={`${todo.isComplete ? CheckIo : UnCheckIo}`} 
                alt="Complete"
                onClick={() => actToggleComplete(todo)}
            />
            <p
                className={`${todo.isComplete ? "isComplete" : ""}`}
            >
                {todo.job}
            </p>
        </div>
    );
};

export default TodoItem;