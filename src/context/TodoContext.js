import React, { Component, createContext } from 'react';

export const TodoContext = createContext(null);

export class TodoProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos : JSON.parse(localStorage.getItem('todos')) || [],
            isAction : false,
            stateComplete : false,
            matchTodos : [],
            mode : ""

        };
    };

    actToggleComplete = (todo) => {
        let indexTodo = this.state.todos.indexOf(todo);

        this.setState({
            todos : [
                ...this.state.todos.slice(0, indexTodo),
                {...todo, isComplete : !todo.isComplete},
                ...this.state.todos.slice(indexTodo+1)
            ],
        })
    };

    actToggleAll = () => {

        let matchTodos = this.state.todos.map( todo => {
            return {...todo, isComplete : this.state.stateComplete}
        })
        this.setState({
            todos : matchTodos,
            stateComplete : !this.state.stateComplete
        })
    };

    actInsertTodo = (todo) => {
        if(todo) {
            this.setState({
                todos : [
                    {...todo},
                    ...this.state.todos
                ]
            })
        }
    };

    actUpdateLocalStorage = () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos))
    };

    actDeleteTodos = () => {
        let matchTodos = this.state.todos.filter( todo => todo.isComplete === false)
        this.setState({
            todos : matchTodos
        })
    };
    
    actToggleAllStorage = async () => {
        await this.actToggleAll();
        await this.actMatchTodos(this.state.mode);
        await this.actUpdateLocalStorage();
    };

    actToggleCompleteStorag = async (todo) => {
        await this.actToggleComplete(todo);
        await this.actMatchTodos(this.state.mode);
        await this.actUpdateLocalStorage();
    };

    actInsertTodoLocalStorage = async (todo) => {
        await this.actInsertTodo(todo)
        await this.actMatchTodos(this.state.mode)
        await this.actUpdateLocalStorage();
    };

    actDeleteTodosLocalStorage = async () => {
        await this.actDeleteTodos();
        await this.actMatchTodos(this.state.mode);
        await this.actUpdateLocalStorage();
    };

    actMatchTodos = (action) => {
        let result = [];

        switch(action) {
            case "Active" :
                result = this.state.todos.filter(todo => todo.isComplete === false ? todo : null);
                break;
            case "Complete" :
                result = this.state.todos.filter(todo => todo.isComplete === true ? todo : null);
                break;
            default : 
                result = this.state.todos;
                break;
        };
        this.setState({
            mode : action,
            matchTodos : result,
            isAction : true
        })
    }; 

    render() {
        
        return (
            <TodoContext.Provider value={{
                todos : this.state.todos,
                matchTodos : this.state.matchTodos,
                isAction : this.state.isAction,
                actToggleComplete : this.actToggleCompleteStorag,
                actToggleAll : this.actToggleAllStorage,
                actInsertTodo : this.actInsertTodoLocalStorage,
                actDeleteTodos : this.actDeleteTodosLocalStorage,
                actMatchTodos : this.actMatchTodos
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    };
};