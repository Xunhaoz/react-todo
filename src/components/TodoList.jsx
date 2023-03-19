import { MdCheck, MdDeleteOutline } from 'react-icons/md';



const Todo = ({
    todos, setTodos, text, todo, 
}) => {
    const completeTodo = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    const deleteTodo = () => {
        console.log("test: ", todos.filter(el => el.id != todo.id))
        setTodos(todos.filter(el => el.id != todo.id))
    }
    
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>

            <button className="complete-btn" onClick={completeTodo}>
                <MdCheck />
            </button>
            <button className="trash-btn"  onClick={deleteTodo}>
                <MdDeleteOutline />
            </button>
        </div>
    )
}

const ToDoList = ({ todos, setTodos, filterTodos }) => {

    return (
        <div className="Todo-container">
            <div className="todo-list">
                {filterTodos?.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                            text={todo.text}
                            todo={todo}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ToDoList