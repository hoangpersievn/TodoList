import React, { useContext, useState } from 'react';

import { TodoContext } from '../../context/TodoContext';

import DownButton from '../../icons/down_button.svg';

const TodoInput = (props) => {
    const { actToggleAll, actInsertTodo } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");

    const handleInputOnChange = (value) => {
        setInputValue(value);
    };

    const handleInputOnKeyUp = (value) => {
        if(value === 13){
            actInsertTodo({job : inputValue, isComplete : false});
        }
    };

    return (
        <div className="todo-add">
            <img 
                className="add-img" 
                style={{width : 32, height : 32}} 
                src={DownButton} 
                alt="check_all"
                onClick={() => actToggleAll()}
            />
            <input 
                className="add-input" 
                type="text" 
                placeholder="Add a new todo..."
                onChange={(event) => handleInputOnChange(event.target.value)}    
                onKeyUp={(event) => handleInputOnKeyUp(event.keyCode)}
            />
        </div>
    );
};

export default TodoInput;