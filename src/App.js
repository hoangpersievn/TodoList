import React from 'react';

import Todo from './components/todo/Todo';
import {TodoProvider} from './context/TodoContext';

import './App.css';

const App = (props) => {

    return (
        <TodoProvider>
            <Todo/>
        </TodoProvider>
    )
};

export default App;
