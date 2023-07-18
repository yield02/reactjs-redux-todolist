import Todo from '../../components/Todo/Todo';
import './Task.scss';

function Task () {
    return (
        <div className='d-flex flex-column'>
            <div className='input_container'>
                <input className='todo_input' placeholder='Bạn cần hoàn thành việc gì?'/>
            </div>
            <div className='todo_filter'>
                <a className='filter-btn active' href='/'>Tất cả</a>
                <span className='space'>/</span>
                <a className='filter-btn' href='/filter?=active'>Đang làm</a>
                <span className='space'>/</span>
                <a className='filter-btn' href='/filter?=completed'>Đã hoàn thành</a>
            </div>
            <div>
                <Todo></Todo>
            </div>
        </div>)
}

export default Task;