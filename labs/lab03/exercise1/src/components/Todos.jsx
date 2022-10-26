import { useRef, useState } from "react";

export default function Todos(props) {
    const [state, setState] = useState({ todos: [] })
    const title = useRef(null);
    function addTodo() {
        setState(prevState => {
            return {
                ...prevState,
                todos: [...prevState.todos,
                {
                    title: title.current.value,
                    done: false
                }]
            }
        })
    }

    function checkTodo(event) {
        setState(prevState => {
            console.log(event.target.dataset.title)
            const targetTodo = prevState.todos.find((todo) => todo.title === event.target.dataset.title);
            targetTodo.done = !targetTodo.done;
            return {
                todos: prevState.todos
            }
        })
    }
    function deleteTodo(event) {
        setState(prevState => {
            return {
                todos: prevState.todos.filter((todo) => todo.title === event.target.dataset.title)
            }
        })
    }

    return <>
        <div className="todo-box">
            <h1 className="title">ToDo App</h1>
            <div className="form-group">
                <input type="text" id="todo-input" placeholder="New Todo ..." ref={title} />
                <i className="fa fa-plus" id="add-todo" onClick={addTodo} />
            </div>
            <div className="todolist-container" id="todolist-container">
                {state.todos.map(todo =>
                    <div key={todo.title}
                        data-title>
                        <div><p>{todo.title}</p></div>
                        <input type="checkbox" checked={todo.done ? "checked" : ""} onChange={checkTodo} />
                        <i className="fa fa-trash" id="delete-todo" onClick={deleteTodo}></i>
                    </div>)}
            </div>
            <a id="clear-todos" href="#">
                Clear All
            </a>
        </div>
    </>;
}