import Button from '../Button/Button';
import './TodoItem.scss';
import {useState} from 'react'

function TodoItem({data, updateTask, removeTask}) {
    const [isEdit, setIsEdit] = useState(false);
    const [tValue, setTValue] = useState(data?.title);

    const handleEditTask = () => {
        setIsEdit(true);
    }

    const handleUpdateTitleTask = (data) => {
        setIsEdit(false);
        if(tValue !== '' && tValue !== data?.title) {
            // xử lý update;
            updateTask(data, {title: tValue})
        }
    }

    const handleUpdateStatusTask = (data) => {
        updateTask(data, {completed: !data?.completed})
    }

    return (
        <div className='item_container d-flex flex-row'>
            <div className='me-3 d-flex align-items-center'>
                <Button className={data?.completed && "active round-btn" || 'round-btn'} onClick={() => handleUpdateStatusTask(data)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Button>
            </div>
            <div className='me-3 d-flex align-items-center flex-grow-1'>
                {
                isEdit && 
                <input className='todo_content' onKeyDown={(e)=> {e.keyCode === 13 && handleUpdateTitleTask(data)}} onChange={(e)=>{setTValue(e.target.value)}} value={tValue}/>
                }

                {
                !isEdit && 
                <div className={data?.completed && "active todo_content" || 'todo_content'}>
                    {data?.title}
                </div>
                }

            </div>
            <div className='me-3 d-flex align-items-center'>
                {/* {update Btn} */}
                {!isEdit && <Button className="round-btn" onClick={handleEditTask}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </Button>}
                {/* {Close Btn} */}
                {isEdit &&<Button className='round-btn' onClick={() => handleUpdateTitleTask(data)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </Button>}
            </div>
            {/* delete button */}
            {!isEdit && <div className='d-flex align-items-center'>
                <Button className="round-btn" data-bs-toggle="modal" data-bs-target="#deleteModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    </svg>
                </Button>
            </div>}
            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">LƯU Ý</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Bạn có chắc muốn xóa hay không ?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => removeTask(data)}>Xóa</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;