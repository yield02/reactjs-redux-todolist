import TodoItem from '../TodoItem/TodoItem';
import './Todo.scss';

function Todo() {
    return (
        <div className='todolist_container'>
            <TodoItem data={"Học tiếng anh"}></TodoItem>
            <TodoItem data={"Học tiếng anh"}></TodoItem>
        </div>
    )
}

export default Todo;