import TodoItem from '../TodoItem/TodoItem';
import './Todo.scss';

function Todo({tasks}) {
    return (
        <div className='todolist_container'>
            {
                tasks.map((task, index) => {
                    return (<TodoItem key={index} data={task}></TodoItem>)
                })
            }
        </div>
    )
}

export default Todo;