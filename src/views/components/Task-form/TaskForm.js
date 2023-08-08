import { useState } from 'react';
import "./TaskForm.scss";

function TaskForm({createTask,...props}) {


    const [inputValue, setInputValue] = useState('');

    const handleAddTask = function(e) {
        if(e.code === "Enter" && inputValue){
            createTask(inputValue);
            setInputValue('');
        }
    }

    return (
        <input className='todo_input' {...props} onKeyDown={handleAddTask} onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder='Bạn cần hoàn thành việc gì?'/>
    )
}


export default TaskForm;