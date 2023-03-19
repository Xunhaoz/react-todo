import { BiMessageSquareAdd } from 'react-icons/bi';

const Form = ({ setInputText, inputText, todos, setTodos, setTab}) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    }

    const submitTodo = (event) => {
        event.preventDefault()

        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 99
            }
        ])

        setInputText('')
    }

    const handleSelect = (event) => {
        setTab(event.target.value)
    }

    return (
        <form>
            <input
                className='todo-input'
                type="text"
                value={inputText}
                onChange={inputTextHandler}
            />

            <button
                type='submit'
                className='todo-button'
                onClick={submitTodo}
            >
                <BiMessageSquareAdd />
            </button>

            <div className="select">
                <select name="todos" onChange={handleSelect}>
                    <option value="all">全部</option>
                    <option value="completed">已完成</option>
                    <option value="uncompleted">待完成</option>
                </select>
            </div>
        </form>
    )
}

export default Form