import TodoItem from '../TodoItem/TodoItem';
import './Todo.scss';

function Todo({tasks, updateTask, removeTask}) {
    return (
        <div className='todolist_container'>
            
            {
                tasks.map((task, index) => {
                    return (<TodoItem key={index} updateTask={updateTask} data={task} removeTask={removeTask}></TodoItem>)
                })
            }
        </div>
    )
}

export default Todo;