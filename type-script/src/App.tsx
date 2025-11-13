import React, { useState } from "react"
import type { ITodo } from "./entities/todo/todo.model"
import Todo from "./share/todo/todo.ui"
import TodoStats from "./widget/stats/stats.ui"


function App() {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [todoTitle, setTodoTitle] = useState("")
    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTodo: ITodo = {
            title: todoTitle,
            id: todos.length,
            status: false
        }
        setTodos([...todos, newTodo])
    }

    const setStatus = (id: number) => {

    }

    const deleteTodo = (id: number) => {

    }

    const calcAmountOfDoneTodos = (todos: ITodo[]) => {
        return todos.filter((todo) => todo.status === true).length
    }
  
  return (
    <div className="container">
        <div className="header">
            <h1>Todo App</h1>
            <p>Управляйте своими задачами</p>
        </div>

        <div className="add-todo">
            <form onSubmit={handleAdd} className="input-container">
                    <input value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} name="todoInput" type="text" className="todo-input" placeholder="Добавить новую задачу..." id="todoInput"/>
                <button className="add-btn" id="addBtn">Добавить</button>
            </form>
        </div>

        <div className="filters">
            <button className="filter-btn active" data-filter="all">Все</button>
            <button className="filter-btn" data-filter="active">Активные</button>
            <button className="filter-btn" data-filter="completed">Завершенные</button>
        </div>

        <div className="todo-list">
                {todos.map((el) => <Todo {...el}
                setStatus={() => {setStatus(el.id)}}
                deleteTodo={() => {deleteTodo(el.id)}}
                />)}
           
        </div>
        <TodoStats all={todos.length} done={calcAmountOfDoneTodos(todos)} 
        todo={todos.length - calcAmountOfDoneTodos(todos)}/>

    </div>
  )
}

export default App
