import type { ITodoProps } from "../../entities/todo/todo.model"

const Todo = ({title, status, setStatus, deleteTodo}: ITodoProps) => {
    return(
            <div className="todo-item">
                <input onChange={setStatus} checked={status} type="checkbox" className="todo-checkbox"/>
                <span className="todo-text">{title}</span>
                <button onClick={deleteTodo} className="delete-btn">Удалить</button>
            </div>
    )
}
export default Todo