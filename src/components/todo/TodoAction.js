import React, {useContext, useState} from 'react';

import { TodoContext } from '../../context/TodoContext';

const TodoAction = (props) => {
    const { todos, actDeleteTodos, actMatchTodos } = useContext(TodoContext);
    const [actions, setActions] = useState(["All", "Active", "Complete"]);
    const [isAction, setIsAction] = useState(0);

    const actActiveAction = (index) => {
        setIsAction(index)
    };

    const handlePOnClick = (index, action) => {

        actActiveAction(index);
        actMatchTodos(action);
    };

    const showActios = (actions) => {
        return actions.map( (item, index) => {
            return (
                <div key={index} className={`action-content ${isAction === index ? 'active' : ""}`}>
                    <p
                        onClick={() => handlePOnClick(index, item)}
                    >
                        {item}
                    </p>
                </div>
            );
        })
    };

    return (
        <div className="todo-action">
            <div className="action">
                <p>{`${todos.length} todos`}</p>
            </div>
            <div className="action">
                {showActios(actions)}
            </div>
            <div className="action">
                <p
                    onClick={() => actDeleteTodos()}
                >
                    Clear Completed
                </p>
            </div>
        </div>
    )
};

export default TodoAction;